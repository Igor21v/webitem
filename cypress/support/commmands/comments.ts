export const addComment = (text: string) => {
    cy.getByTestID('AddCommentForm.Input').type(text);
    cy.getByTestID('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
