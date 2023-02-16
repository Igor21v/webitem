export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestID('EditableProfileCardHeader.EditButton').click();
    cy.getByTestID('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestID('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestID('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'qwesd' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'testLastname',
            age: 50,
            currency: 'RUB',
            country: 'Russia',
            city: '',
            username: 'testUser',
            avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
