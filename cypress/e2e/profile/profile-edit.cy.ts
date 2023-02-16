let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${profileId}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('И профиль успешно загружается', () => {
        cy.getByTestID('ProfileCard.firstname').should('have.value', 'test');
    });
    it('И редактирует его', () => {
        const newName = 'newTest';
        const newLastname = 'newTestLastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestID('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestID('ProfileCard.lastname').should(
            'have.value',
            newLastname,
        );
    });
});
