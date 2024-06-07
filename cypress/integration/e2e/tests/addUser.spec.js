import AddUserPage from "../page-objects/AddUserPage";
import { generateUserData } from '../../../utils/dataGenerator';

describe('Add User Page Tests', () => {
    const addUserPage = new AddUserPage();

    beforeEach(() => {
        cy.loggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                cy.logout();
            }
            addUserPage.visit();
        });
    });

    it('should allow a user to add a new user', () => {
        const newUser = generateUserData();

        addUserPage.addUser(newUser)
        .then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList');
            cy.loggedIn().should('be.true');
        });
    });

    it('should display an error message for an empty first name', () => {
        const newUser = generateUserData();
        addUserPage.addUserWithoutFirstName(newUser).then(() => {
            addUserPage.errorMessage.should('be.visible');
            addUserPage.errorMessage.should('have.text', 'User validation failed: firstName: Path `firstName` is required.');
        });
    });

    it('should display an error message for an empty last name', () => {
        const newUser = generateUserData();
        addUserPage.addUserWithoutLastName(newUser).then(() => {
            addUserPage.errorMessage.should('be.visible');
            addUserPage.errorMessage.should('have.text', 'User validation failed: lastName: Path `lastName` is required.');
        });
    });

    it('should display an error message for an empty email', () => {
        const newUser = generateUserData();
        addUserPage.addUserWithoutEmail(newUser).then(() => {
            addUserPage.errorMessage.should('be.visible');
            addUserPage.errorMessage.should('have.text', 'User validation failed: email: Email is invalid');
        });
    });

    it('should display an error message for an invalid email', () => {
        const newUser = generateUserData();
        addUserPage.addUserWithInvalidEmail(newUser).then(() => {
            addUserPage.errorMessage.should('be.visible');
            addUserPage.errorMessage.should('have.text', 'User validation failed: email: Email is invalid');
        });
    });
    
    it('should display an error message for an empty password', () => {
      const newUser = generateUserData();
      addUserPage.addUserWithoutPassword(newUser).then(() => {
          addUserPage.errorMessage.should('be.visible');
          addUserPage.errorMessage.should('have.text', 'User validation failed: password: Path `password` is required.');
      });
    });

    it('should return to the login page when the cancel button is clicked', () => {
        addUserPage.cancelButton.click().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/login');
        });
    });

    afterEach(() => {
      cy.clearLocalStorage();
    });

  });