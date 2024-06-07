import BasePage from './BasePage';

class AddUserPage extends BasePage {
    // Page Elements
    get firstName() {
        return cy.get('#firstName');
    }

    get lastName() {
        return cy.get('#lastName');
    }

    get email() {
        return cy.get('#email');
    }

    get password() {
        return cy.get('#password');
    }

    get submitButton() {
        return cy.get('button#submit');
    }

    get cancelButton() {
        return cy.get('button#cancel');
    }

    get errorMessage() {
        return cy.get('span#error');
    }

    addUser(user) {
        this.firstName.type(user.firstName);
        this.lastName.type(user.lastName);
        this.email.type(user.email);
        this.password.type(user.password);
        return this.submitButton.click();
    }
    
    addUserWithoutFirstName(user) {
        this.lastName.type(user.lastName);
        this.email.type(user.email);
        this.password.type(user.password);
        return this.submitButton.click();
    }

    addUserWithoutLastName(user) {
        this.firstName.type(user.firstName);
        this.email.type(user.email);
        this.password.type(user.password);
        return this.submitButton.click();
    }

    addUserWithoutEmail(user) {
        this.firstName.type(user.firstName);
        this.lastName.type(user.lastName);
        this.password.type(user.password);
        return this.submitButton.click();
    }

    addUserWithInvalidEmail(user) {
        this.firstName.type(user.firstName);
        this.lastName.type(user.lastName);
        this.email.type('invalidEmail');
        this.password.type(user.password);
        return this.submitButton.click();
    }

    addUserWithoutPassword(user) {
        this.firstName.type(user.firstName);
        this.lastName.type(user.lastName);
        this.email.type(user.email);
        return this.submitButton.click();
    }

    cancelAddUser() {
        return this.cancelButton.click();
    }
}

export default AddUserPage;