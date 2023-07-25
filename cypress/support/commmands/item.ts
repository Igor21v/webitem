import { testLogin, testPassword } from '../../../json-server/keys/tests.js';
import { TEST_ITEM } from '@/shared/const/tests';
import { Item } from '../../../src/entities/Item';

export const createItem = (item?: Item) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/items',
            headers: {
                authorization: JSON.stringify({
                    username: testLogin,
                    password: testPassword,
                }),
            },
            body: item ?? { ...TEST_ITEM, id: null },
        })
        .then((resp) => resp.body);
};

export const removeItem = (itemId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/items/${itemId}`,
        headers: {
            authorization: JSON.stringify({
                username: testLogin,
                password: testPassword,
            }),
        },
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
