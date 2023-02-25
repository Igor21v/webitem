/* eslint-disable max-len */
import { Item } from '@/entities/Item/testing';

export const TEST_ARTICLE = {
    id: '1',
    title: 'Javascript news asfasjf asfjkask f',
    description: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    codes: {
        html: '<div class="test">TEXT</div>',
        css: '.test {font-size: 30px}',
        js: 'console.log("test")',
    },
} as Item;
