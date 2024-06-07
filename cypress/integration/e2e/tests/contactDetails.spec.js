import ContactDetailsPage from "../page-objects/ContactDetailsPage";

describe('Contact Details Page Tests', () => {
    const contactDetailsPage = new ContactDetailsPage();

    beforeEach(() => {
        cy.loggedIn().then((isLoggedIn) => {
            if (!isLoggedIn) {
                cy.login();
            }
            contactDetailsPage.visit();
        });
    });

    it('should allow a user to edit the contact', () => {
        contactDetailsPage.editButton.click().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/editContact');
        });
    });

    it('should allow a user to delete the contact', () => {
        contactDetailsPage.deleteButton.click().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
        });
    });

    it('should allow a user to return to the contact list', () => {
        contactDetailsPage.returnButton.click().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
        });
    });
});