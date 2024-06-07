import BasePage from './BasePage';

class ContactListPage extends BasePage {
  visit() {
    cy.visit(this.url + '/contactList');
  }

  get addContactButton() {
    return cy.get('button#add-contact');
  }

  get contactList() {
    return cy.get('table#myTable');
  }

  getTableRows() {
    return cy.get('.contactTableBodyRow');
  }

  getContactByEmail(email) {
      return this.getTableRows().then((rows) => {
          let contact = null;
          rows.each((index, row) => {
              const rowEmail = Cypress.$(row).find('td').eq(3).text().trim();
              if (rowEmail === email) {
                  contact = {
                      id: Cypress.$(row).find('td').eq(0).text().trim(),
                      name: Cypress.$(row).find('td').eq(1).text().trim(),
                      birthDate: Cypress.$(row).find('td').eq(2).text().trim(),
                      email: rowEmail,
                      phone: Cypress.$(row).find('td').eq(4).text().trim(),
                      address: Cypress.$(row).find('td').eq(5).text().trim(),
                      cityStatePostal: Cypress.$(row).find('td').eq(6).text().trim(),
                      country: Cypress.$(row).find('td').eq(7).text().trim()
                  };
                  return false;
              }
          });
          return contact;
      });
  }

  validateContact(contact) {
      return this.getContactByEmail(contact.email).then((foundContact) => {
          expect(foundContact.name).to.equal(contact.firstName + ' ' + contact.lastName);
          expect(foundContact.birthdate).to.equal(contact.birthDate);
          expect(foundContact.email).to.equal(contact.email);
          expect(foundContact.phone).to.equal(contact.phone);
          expect(foundContact.address).to.equal(contact.street1 + ' ' + contact.street2);
          expect(foundContact.cityStatePostal).to.equal(contact.city + ' ' + contact.stateProvince + ' ' + contact.postalCode);
          expect(foundContact.country).to.equal(contact.country);
      });
  }
}

export default ContactListPage;