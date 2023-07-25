import { selectByTestId } from '../../helpers/selectByTestId';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { testLogin, testPassword } from '../../../json-server/keys/tests.js';

export const login = (
    username: string = testLogin,
    password: string = testPassword,
) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });
};

export const getByTestID = (testId: string) => {
    cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<User>;
            getByTestID(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
