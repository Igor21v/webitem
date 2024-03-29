describe('Пользователь заходит на страницу компонентов', () => {
    beforeEach(() => {
        cy.visit('/items/all');
    });
    it('Компоненты успешно подгружаются', () => {
        cy.getByTestID('ItemList').should('exist');
        cy.getByTestID('ItemListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/items/*', { fixture: 'items.json' });
        cy.getByTestID('ItemList').should('exist');
        cy.getByTestID('ItemListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Пример заскипанного теста', () => {
        cy.getByTestID('ItemList').should('exist');
        cy.getByTestID('ItemListItem').should('have.length.greaterThan', 3);
        cy.getByTestID('MissingAtr').should('exist');
    });
});
