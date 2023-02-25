let currentItemId = '';
describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createItem().then((item) => {
            currentItemId = item.id;
            cy.visit(`items/${item.id}`);
        });
    });
    afterEach(() => {
        cy.removeItem(currentItemId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestID('ItemDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestID('ItemRecommendationList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestID('ItemDetails.Info');
        cy.getByTestID('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestID('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.intercept('GET', '**/items/*', {
            fixture: 'item-details.json',
        });
        cy.getByTestID('ItemDetails.Info');
        cy.getByTestID('RatingCard').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
