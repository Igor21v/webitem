/* eslint-disable max-len */
import { Item } from '@/entities/Item/testing';

export const TEST_ITEM = {
    id: '1',
    title: 'TestComponent',
    description: 'Описание тестового компонента',
    views: 1022,
    createdAt: '26.05.2023',
    codes: {
        html: '<div class="test">TEXT</div>',
        css: '.test {font-size: 30px}',
        js: 'console.log("test")',
    },
} as Item;

export const TEST_ITEMS = new Array(9).fill(0).map((item, index) => ({
    ...TEST_ITEM,
    id: String(index),
}));
