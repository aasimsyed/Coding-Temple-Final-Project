import BasePage from './BasePage';

class AddContactPage extends BasePage {
  // Page Elements
  get firstName() {
    return cy.get('#firstName');
  }

  get lastName() {
    return cy.get('#lastName');
  }

  get birthDate() {
    return cy.get('#birthdate');
  }

  get email() {
    return cy.get('#email');
  }

  get phone() {
    return cy.get('#phone');
  }

  get street1() {
    return cy.get('#street1');
  }

  get street2() {
    return cy.get('#street2');
  }

  get city() {
    return cy.get('#city');
  }

  get stateProvince() {
    return cy.get('#stateProvince');
  }

  get postalCode() {
    return cy.get('#postalCode');
  }

  get country() {
    return cy.get('#country');
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

  visit() {
    cy.visit(this.url + '/addContact');
  }

  addContact(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    this.birthDate.type(contact.birthdate);
    this.email.type(contact.email);
    this.phone.type(contact.phone);
    this.street1.type(contact.street1);
    this.street2.type(contact.street2);
    this.city.type(contact.city);
    this.stateProvince.type(contact.stateProvince);
    this.postalCode.type(contact.postalCode);
    this.country.type(contact.country);
    return this.submitButton.click();
  }

  addContactWithRequiredFieldsOnly(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    return this.submitButton.click();
  }

  addContactWithoutFirstName(contact) {
    this.lastName.type(contact.lastName);
    this.email.type(contact.email);
    this.phone.type(contact.phone);
    return this.submitButton.click();
  }

  addContactWithoutLastName(contact) {
    this.firstName.type(contact.firstName);
    this.email.type(contact.email);
    this.phone.type(contact.phone);
    return this.submitButton.click();
  }

  addContactWithInvalidBirthDate(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    this.birthDate.type('invalidBirthDate');
    this.email.type(contact.email);
    this.phone.type(contact.phone);
    return this.submitButton.click();
  }

  addContactWithInvalidPhone(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    this.phone.type('invalidPhone');
    this.email.type(contact.email);
    return this.submitButton.click();
  }

  addContactWithInvalidEmail(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    this.email.type('invalidEmail');
    this.phone.type(contact.phone);
    return this.submitButton.click();
  }

  addContactWithInvalidPostalCode(contact) {
    this.firstName.type(contact.firstName);
    this.lastName.type(contact.lastName);
    this.email.type(contact.email);
    this.phone.type(contact.phone);
    this.postalCode.type('invalidPostalCode');
    return this.submitButton.click();
  }
}

export default AddContactPage;