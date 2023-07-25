let currentItemId = '';
describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createItem().then((item) => {
            currentItemId = item.id;
            cy.visit(`item/${item.id}`);
        });
    });
    afterEach(() => {
        cy.removeItem(currentItemId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestID('ItemDetails.Info').should('exist');
    });
});
