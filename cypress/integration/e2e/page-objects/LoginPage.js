import BasePage from './BasePage';

class LoginPage extends BasePage {
    // Page Elements
    get username() {
        return cy.get('#email');
    }

    get password() {
        return cy.get('#password');
    }

    get loginButton() {
        return cy.get('button#submit');
    }

    get signUpButton() {
        return cy.get('button#signup');
    }

    get errorMessage() {
        return cy.get('span#error');
    }

    visit() {
        cy.visit(this.url + '/login');
    }

    login(username, password) {
        this.username.type(username);
        this.password.type(password);
        return this.loginButton.click();
    }

    loginWithoutUsername(password) {
        this.password.type(password);
        return this.loginButton.click();
    }

    loginWithoutPassword(username) {
        this.username.type(username);
        return this.loginButton.click();
    }

    signUp() {
        return this.signUpButton.click();
    }
}

export default LoginPage;