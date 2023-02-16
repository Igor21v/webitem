let currentArticleId = '';
describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('И видит содержимое статьи', () => {
        cy.getByTestID('ArticleDetails.Info').should('exist');
    });
    it('И видит список рекомендаций', () => {
        cy.getByTestID('ArticleRecommendationList').should('exist');
    });
    it('И оставляет комментарий', () => {
        cy.getByTestID('ArticleDetails.Info');
        cy.getByTestID('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestID('CommentCard.Content').should('have.length', 1);
    });
    it('И ставит оценку', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestID('ArticleDetails.Info');
        cy.getByTestID('RatingCard').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
