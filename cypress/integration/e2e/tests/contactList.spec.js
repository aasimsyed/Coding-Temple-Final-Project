import ContactListPage from '../page-objects/ContactListPage';

describe('Contact List', () => {
  const contactListPage = new ContactListPage();

  beforeEach(() => {
    cy.loggedIn().then((isLoggedIn) => {
      if (!isLoggedIn) {
        cy.login();
      }
      contactListPage.visit();
    });
  });

  it('should display the contact list', () => {
    contactListPage.contactList.should('be.visible');
  });

  it('should allow a user to add a new contact', () => {
    contactListPage.addContactButton.click().then(() => {
      cy.url().should('eq', Cypress.env('contactListUrl') + '/addContact');
    });
  });
});