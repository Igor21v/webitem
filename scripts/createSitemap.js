const fs = require('fs');
const path = require('path');

const host = 'https://webitem.ru';
const links = [];

// Пути для базовых маршрутов
basePaths = ['', '/items/all', '/favourites', '/about'];
basePaths.forEach((path) => {
    links.push(host + path);
    links.push(`${host}/en${path}`);
});

// Пути для компонентов
const db = JSON.parse(
    fs.readFileSync(
        path.resolve(__dirname, '..', 'json-server', 'db.json'),
        'UTF-8',
    ),
);
const ids = db.items.map((item) => item.id);
ids.forEach((id) => {
    links.push(`${host}/item/${id}`);
    links.push(`${host}/en/item/${id}`);
});

fs.writeFileSync(
    path.resolve(__dirname, '..', 'sitemap.txt'),
    links.join('\r\n'),
);
