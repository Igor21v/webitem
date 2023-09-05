const fs = require('fs');
const path = require('path');

const host = 'https://webitem.ru';
basePaths = ['', '/items/all', '/favourites', '/about'];
const baseLinks = basePaths.map((path) => host + path);

const db = JSON.parse(
    fs.readFileSync(
        path.resolve(__dirname, '..', 'json-server', 'db.json'),
        'UTF-8',
    ),
);
const ids = db.items.map((item) => item.id);
const idsLinks = ids.map((id) => `${host}/item/${id}`);

const links = baseLinks.concat(idsLinks);
fs.writeFileSync(
    path.resolve(__dirname, '..', 'sitemap.txt'),
    links.join('\r\n'),
);
