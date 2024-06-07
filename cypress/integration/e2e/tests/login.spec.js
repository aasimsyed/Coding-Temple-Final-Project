import LoginPage from "../page-objects/LoginPage";
import validUser from "../../../fixtures/validUser.json";

describe('Login Page Tests', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.loggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                loginPage.getLogoutButton().click();
            } else {
                loginPage.visit();
            }
        });
    });

    afterEach(() => {
      cy.clearLocalStorage();
    });

    it('should allow a user to login with valid credentials', () => {
        loginPage.login(validUser.email, validUser.password);
        cy.url().should('eq', Cypress.env('contactListUrl') + '/contactList')
        .then(() => {
            cy.loggedIn().should('be.true');
        });
    });

    it('should display an error message for invalid credentials', () => {
        loginPage.login(validUser.email, 'invalidPassword').then(() => {
            loginPage.errorMessage.should('be.visible');
            loginPage.errorMessage.should('have.text', 'Incorrect username or password');
        });
    });

    it('should display an error message for empty credentials', () => {
        loginPage.loginButton.click().then(() => {
            loginPage.errorMessage.should('be.visible');
            loginPage.errorMessage.should('have.text', 'Incorrect username or password');
        });
    });

    it('should display an error message for an empty password', () => {
        loginPage.loginWithoutPassword(validUser.email).then(() => {
            loginPage.errorMessage.should('be.visible');
            loginPage.errorMessage.should('have.text', 'Incorrect username or password');
        });
    });

    it('should display an error message for an empty username', () => {
        loginPage.loginWithoutUsername(validUser.password).then(() => {
            loginPage.errorMessage.should('be.visible');
            loginPage.errorMessage.should('have.text', 'Incorrect username or password');
        });
    });

    it('should allow a user to navigate to the sign up page', () => {
        loginPage.signUp().then(() => {
            cy.url().should('eq', Cypress.env('contactListUrl') + '/addUser');
        });
    });
});