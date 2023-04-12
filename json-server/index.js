/* eslint-disable no-console */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');
const http = require('http');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const findUser = require('./findUser');

const db = low(new FileSync(path.resolve(__dirname, 'db.json')));
const router = jsonServer.router(db);

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'keys', 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'keys', 'cert.pem')),
};

const server = jsonServer.create();

server.use((req, res, next) => {
    res.header('Cache-Control', 'public, max-age=86400000'); // change max-age to any value in milliseconds you want
    next();
});

// Подключение статики
server.use(
    jsonServer.defaults({
        static: path.resolve(__dirname, 'static'),
    }),
);

server.use(jsonServer.bodyParser);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        userFromBd = findUser(username, password);
        if (userFromBd) {
            return res.json(userFromBd);
        }
        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для избранного
server.get('/itemsLike', (req, res) => {
    try {
        console.log(`Res ${JSON.stringify(req.query)}`);
        const itemsReq = JSON.parse(req.query.itemsReq);
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );
        console.log(`itemsReq ${JSON.stringify(itemsReq)}`);
        const itemsDB = db.items;
        const itemsRes = Object.keys(itemsReq).map((itemReq) =>
            itemsDB.find((itemDB) => {
                console.log(
                    `itemDB.id ${itemDB.id} itemReq.id ${itemReq} bool ${
                        itemDB.id === itemReq
                    }`,
                );
                return itemDB.id === itemReq;
            }),
        );

        if (itemsRes) {
            console.log(`itemsRes ${JSON.stringify(itemsRes)}`);
            return res.json(itemsRes);
        }

        return res.status(403).json({ message: 'Items not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Дабавляем просмотр
server.get('/items/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const itemDB = db.get('items').find({ id: `${id}` });
        const { views } = itemDB.value();
        itemDB.assign({ views: views + 1 }).write();
        next();
    } catch (e) {
        console.log(`Ошибка при добавлении просмотра ${e}`);
        next();
    }
});

// авторизован ли пользователь
server.use((req, res, next) => {
    if (
        req.method === 'POST' ||
        req.method === 'PUT' ||
        req.method === 'PATCH'
    ) {
        const headAuth = JSON.parse(req.headers.authorization);
        const username = headAuth?.username;
        const password = headAuth?.password;
        userFromBd = findUser(username, password);
        if (!userFromBd) {
            return res.status(401).json({ message: 'AUTH ERROR' });
        }
        if (req.method === 'POST' && req.path === '/items') {
            console.log(`test ${JSON.stringify(req.path)}`);
            const { title } = req.body;
            console.log(`title ${JSON.stringify(title)}`);
            const itemDB = db.get('items').find({ title: `${title}` });
            console.log(`itemDB ${JSON.stringify(itemDB.value())}`);
            if (itemDB.value()) {
                return res
                    .status(409)
                    .json({ message: 'ELEMENT ALREADY EXISTS' });
            }

            const dateNow = new Date();
            req.body.createdAt = `${dateNow.getFullYear()}.${dateNow.getMonth()}.${dateNow.getDate()}`;
            req.body.views = 0;
        }
    }
    next();
});

server.use(router);

// запуск сервера
const PORT = 8443;
const HTTP_PORT = 8000;

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);

httpsServer.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});

httpServer.listen(HTTP_PORT, () => {
    console.log(`server is running on ${HTTP_PORT} port`);
});
