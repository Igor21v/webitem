import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на страницу всех компонентов', () => {
            cy.visit('/items/all');
            cy.get(selectByTestId('ItemsPage')).should('exist');
        });
        it('Попытка перехода в панель администратора', () => {
            cy.visit('/admin');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Попытка перехода по несуществующему маршруту', () => {
            cy.visit('/sdfsaa');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход в панель администратора', () => {
            cy.visit('/admin');
            cy.get(selectByTestId('AdminPanelPage')).should('exist');
        });
    });
});
