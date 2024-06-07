// Base Object for Page Object Model (POM)
import contracts from '../../../../contracts';
// import getUser from userUtils.js
import { getUser } from '../../../utils/userUtils';

class BasePage {
    constructor() {
        this.url = Cypress.env('contactListUrl');
    }

    visit() {
        cy.visit(this.url + '/addUser');
    }

    getPageTitle() {
        return cy.title();
    }

    getLogoutButton() {
        return cy.get('button#logout:visible');
    }

    logout() {
        return this.getLogoutButton().click();
    }

    clearLocalStorage() {
        cy.clearLocalStorage();
    }
}

export default BasePage;