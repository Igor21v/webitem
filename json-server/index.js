/* eslint-disable no-console */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');
const http = require('http');
const items = require('./db/items');

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'keys', 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'keys', 'cert.pem')),
};

const server = jsonServer.create();

const router = jsonServer.router(require('./db.js')());

server.use((req, res, next) => {
    res.header('Cache-Control', 'public, max-age=86400000'); // change max-age to any value in milliseconds you want
    next();
});

server.use(
    jsonServer.defaults({
        static: path.resolve(__dirname, 'static'),
    }),
);

// Заменить путь при деплое

server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
/* server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
}); */

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(
                path.resolve(__dirname, 'db', 'users.json'),
                'UTF-8',
            ),
        );
        const users = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

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
        console.log(`itemsReq ${JSON.stringify(itemsReq)}`);
        const itemsDB = items();
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
// проверяем, авторизован ли пользователь
// eslint-disable-next-line
/* server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
}); */

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
