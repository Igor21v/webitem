describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('Статьи успешно подгружаются', () => {
        cy.getByTestID('ArticleList').should('exist');
        cy.getByTestID('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestID('ArticleList').should('exist');
        cy.getByTestID('ArticleListItem').should('have.length.greaterThan', 3);
    });
    it.skip('Пример заскипанного теста', () => {
        cy.getByTestID('ArticleList').should('exist');
        cy.getByTestID('ArticleListItem').should('have.length.greaterThan', 3);
        cy.getByTestID('MissingAtr').should('exist');
    });
});
