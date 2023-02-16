export const setRating = (
    starsCount: number = 5,
    feedback: string = 'feedback',
) => {
    cy.getByTestID(`StarRating.${starsCount}`).click();
    cy.getByTestID('RatingCard.Input').type(feedback);
    cy.getByTestID('RatingCard.Send').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRating(starsCount: number, feedback: string): Chainable<void>;
        }
    }
}
