let currentItemId = '';
describe('Пользователь заходит на страницу компонентов', () => {
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
    it('И видит содержимое компонента', () => {
        cy.getByTestID('ItemDetails.Info').should('exist');
    });
});
