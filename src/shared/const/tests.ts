/* eslint-disable max-len */
import { Item } from '@/entities/Item/testing';
import image from '@/shared/assets/tests/CSS Bear Toggle.png';
import animation from '@/shared/assets/tests/CSS Bear Toggle.gif';
import sprite from '@/shared/assets/tests/navbar_sprite.png';

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

export const TEST_IMAGE = image;

export const TEST_ANIMATION = animation;

export const TEST_SPITE_IMAGE = sprite;
