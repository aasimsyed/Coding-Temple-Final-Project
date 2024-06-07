import BasePage from "./BasePage";

class ContactDetailsPage extends BasePage {
  // Page Elements
  get firstName() {
    return cy.get("#firstName");
  }

  get lastName() {
    return cy.get("#lastName");
  }

  get birthDate() {
    return cy.get("#birthdate");
  }

  get email() {
    return cy.get("#email");
  }

  get phone() {
    return cy.get("#phone");
  }

  get street1() {
    return cy.get("#street1");
  }

  get street2() {
    return cy.get("#street2");
  }

  get city() {
    return cy.get("#city");
  }

  get stateProvince() {
    return cy.get("#stateProvince");
  }

  get postalCode() {
    return cy.get("#postalCode");
  }

  get country() {
    return cy.get("#country");
  }

  get editButton() {
    return cy.get("button#edit-contact");
  }

  get deleteButton() {
    return cy.get("button#delete");
  }

  get returnButton() {
    return cy.get("button#return");
  }

  get errorMessage() {
    return cy.get("span#error");
  }

  visit() {
    cy.visit(this.url + "/contactDetails");
  }

  deleteContact() {
    return this.deleteButton.click();
  }
}

export default ContactDetailsPage;