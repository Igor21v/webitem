describe('Создание компонента через админку', () => {
    beforeEach(() => {
        cy.login();
    });
    it('Создание компонента', () => {
        cy.visit('admin');
        cy.getByTestID('ItemEditCard.Title').scrollIntoView();
        cy.getByTestID('ItemEditCard.Title').type('Test create component');
        cy.getByTestID('ItemTypeSelector.Select').select('animation');
        cy.getByTestID('ItemAdd.AddButton').click();
        cy.wait(500);
    });
    it('Переходим в список компонентов', () => {
        cy.visit(`items/all`);
        cy.getByTestID('ItemList').should('exist');
    });
    it('Видим компонент в списке', () => {
        cy.wait(500);
        cy.getByTestID('ItemsPageFilters.Search').type('Test create component');
        cy.getByTestID('ItemListItem').should('have.length', 1);
    });
    it('Заходим в него и удаляем', () => {
        cy.wait(500);
        cy.intercept('GET', 'http://localhost:8000/items/*').as('getItem');
        cy.getByTestID('ItemListItem.ViewButton').click();
        cy.getByTestID('ItemDetails.Header').should(
            'have.text',
            'Test create component',
        );
        cy.wait('@getItem').then((interception) => {
            cy.removeItem(interception.response?.body.id);
        });
    });
    it('Переходим в список и видим что его нет', () => {
        cy.visit(`items/all`);
        cy.getByTestID('ItemList').should('exist');
        cy.wait(500);
        cy.getByTestID('ItemsPageFilters.Search').type('Test create component');
        cy.getByTestID('ItemListItem').should('have.length', 0);
    });
});
