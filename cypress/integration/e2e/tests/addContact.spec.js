import AddContactPage from "../page-objects/AddContactPage";
import ContactListPage from "../page-objects/ContactListPage";
import { generateContactData } from '../../../utils/dataGenerator';

describe('Add Contact Page Tests', () => {
    const addContactPage = new AddContactPage();

    beforeEach(() => {
        cy.loggedIn().then((isLoggedIn) => {
            if (!isLoggedIn) {
                cy.login();
            }
            addContactPage.visit();
        });
    });

    it('should allow a user to add a new contact with all fields', () => {
        const newContact = generateContactData();

        addContactPage.addContact(newContact)
        .then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
            const contactListPage = new ContactListPage();
            contactListPage.validateContact(newContact);
        });
    });

    it('should allow a user to add a new contact with only required fields', () => {
        const newContact = generateContactData();

        addContactPage.addContactWithRequiredFieldsOnly(newContact)
        .then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
        });
    });

    it('should display an error message for an empty first name', () => {
        const newContact = generateContactData();
        addContactPage.addContactWithoutFirstName(newContact).then(() => {
            addContactPage.errorMessage.should('be.visible');
            addContactPage.errorMessage.should('have.text', 'Contact validation failed: firstName: Path `firstName` is required.');
        });
    });

    it('should display an error message for an empty last name', () => {
        const newContact = generateContactData();
        addContactPage.addContactWithoutLastName(newContact).then(() => {
            addContactPage.errorMessage.should('be.visible');
            addContactPage.errorMessage.should('have.text', 'Contact validation failed: lastName: Path `lastName` is required.');
        });
    });

    it('should display an error message for an invalid email', () => {
        const newContact = generateContactData();
        addContactPage.addContactWithInvalidEmail(newContact).then(() => {
            addContactPage.errorMessage.should('be.visible');
            addContactPage.errorMessage.should('have.text', 'Contact validation failed: email: Email is invalid');
        });
    });

    it('should return to the contact list when the cancel button is clicked', () => {
        addContactPage.cancelButton.click().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
        });
    });
});