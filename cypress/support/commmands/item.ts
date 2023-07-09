import { Item } from '../../../src/entities/Item';

const defaultItem = {
    title: 'TESTING ITEM',
    subtitle: 'Экономика',
    img: 'https://www.mirea.ru/upload/iblock/7cf/vvp_rf2018_1.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: ['ECONOMICS'],
    blocks: [],
};

export const createItem = (item?: Item) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/items',
            headers: { Authorization: 'qwesd' },
            body: item ?? defaultItem,
        })
        .then((resp) => resp.body);
};

export const removeItem = (itemId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/items/${itemId}`,
        headers: { Authorization: 'qwesd' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createItem(item?: Item): Chainable<Item>;
            removeItem(itemId: string): Chainable<void>;
        }
    }
}
