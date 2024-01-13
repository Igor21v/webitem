const fs = require('fs');
const path = require('path');

const itemList = [
    'animation',
    'background',
    'button',
    'card',
    'checkbox',
    'error',
    'icon',
    'input_form',
    'loader',
    'mini_app',
    'modal',
    'menu_tabs_dropdown',
    'notification',
    'rating',
    'radio_button',
    'skeleton',
    'slider',
    'toggle',
    'tooltip',
    'text_link',
];

const host = 'https://webitem.ru';
const links = [];

// Пути для базовых маршрутов
basePaths = ['', '/items/all', '/favourites', '/about'];
itemList.forEach((item) => {
    basePaths.push(`/items/${item}`);
});
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

const blocks = links.map(
    (link) => `<url>
<loc>${link}</loc>
</url>
`,
);

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${blocks.join('')}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, '..', 'sitemap.xml'), content);
