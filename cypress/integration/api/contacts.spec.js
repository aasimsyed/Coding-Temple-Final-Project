// cypress/integration/api/contacts.spec.js
import contracts from '../../../contracts';
import { generateContactData, generateUserData, generateContactDataWithMissingLastName } from '../../utils/dataGenerator';
import { addUser, login } from '../../utils/userUtils';
import { addContact, getContact, updateContact, deleteContact } from '../../utils/contactUtils';

describe('API Tests for Contact Endpoints', () => {
  const apiUrl = Cypress.env('contactListUrl');
  let token;
  let contactId;

  before(() => {
    // generate a new user to be used for the tests
    const newUser = generateUserData();

    addUser(newUser).then((response) => {
      token = response.body.token;
      expect(response.status).to.eq(contracts.addUserResponse.response.status);
      expect(token).to.exist;
    });
  });

  it('should create a contact', () => {
    const newContact = generateContactData();

    cy.log("newContact: ", newContact);

    addContact(newContact, token).then((response) => {
      expect(response.status).to.eq(contracts.addContactResponse.response.status);
      expect(response.body).to.have.property('_id');
      expect(response.body).to.have.property('firstName', newContact.firstName);
      expect(response.body).to.have.property('lastName', newContact.lastName);
      expect(response.body).to.have.property('email', newContact.email.toLowerCase());
      expect(response.body).to.have.property('phone', newContact.phone);
      expect(response.body).to.have.property('street1', newContact.street1);
      expect(response.body).to.have.property('street2', newContact.street2);
      expect(response.body).to.have.property('city', newContact.city);
      expect(response.body).to.have.property('stateProvince', newContact.stateProvince);
      expect(response.body).to.have.property('postalCode', newContact.postalCode);
      expect(response.body).to.have.property('country', newContact.country);
      contactId = response.body._id;
    });
  });

  it('should retrieve a contact', () => {
    getContact(contactId, token).then((response) => {
      expect(response.status).to.eq(contracts.getContactResponse.response.status);
      expect(response.body).to.have.property('_id', contactId);
    });
  });

  it('should update a contact using PUT', () => {
    const updatedContact = generateContactData();
    
    addContact(updatedContact, token).then((addResponse) => {
      const tempContactId = addResponse.body._id;

      updateContact(tempContactId, updatedContact, token).then((updateResponse) => {
        expect(updateResponse.status).to.eq(contracts.updateContact_PUT_Response.response.status);
        expect(updateResponse.body).to.have.property('_id', tempContactId);
        expect(updateResponse.body).to.have.property('firstName', updatedContact.firstName);
        expect(updateResponse.body).to.have.property('lastName', updatedContact.lastName);
        expect(updateResponse.body).to.have.property('email', updatedContact.email);
        expect(updateResponse.body).to.have.property('phone', updatedContact.phone);
        expect(updateResponse.body).to.have.property('street1', updatedContact.street1);
        expect(updateResponse.body).to.have.property('street2', updatedContact.street2);
        expect(updateResponse.body).to.have.property('city', updatedContact.city);
        expect(updateResponse.body).to.have.property('stateProvince', updatedContact.stateProvince);
        expect(updateResponse.body).to.have.property('postalCode', updatedContact.postalCode);
        expect(updateResponse.body).to.have.property('country', updatedContact.country);
      });

      deleteContact(tempContactId, token).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(contracts.deleteContactResponse.response.status);
      });
    });
  });

  it('should update a contact using PATCH', () => {
    const updatedContact = generateContactData();
    
    addContact(updatedContact, token).then((addResponse) => {
      const tempContactId = addResponse.body._id;

      updateContact(tempContactId, updatedContact, token).then((updateResponse) => {
        expect(updateResponse.status).to.eq(contracts.updateContact_PATCH_Response.response.status);
        expect(updateResponse.body).to.have.property('_id', tempContactId);
        expect(updateResponse.body).to.have.property('firstName', updatedContact.firstName);
        expect(updateResponse.body).to.have.property('lastName', updatedContact.lastName);
        expect(updateResponse.body).to.have.property('email', updatedContact.email);
        expect(updateResponse.body).to.have.property('phone', updatedContact.phone);
        expect(updateResponse.body).to.have.property('street1', updatedContact.street1);
        expect(updateResponse.body).to.have.property('street2', updatedContact.street2);
        expect(updateResponse.body).to.have.property('city', updatedContact.city);
        expect(updateResponse.body).to.have.property('stateProvince', updatedContact.stateProvince);
        expect(updateResponse.body).to.have.property('postalCode', updatedContact.postalCode);
        expect(updateResponse.body).to.have.property('country', updatedContact.country);
      });

      deleteContact(tempContactId, token).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(contracts.deleteContactResponse.response.status);
      });
    });
  });

  it('should delete a contact', () => {
    addContact(generateContactData(), token).then((addResponse) => {
      const tempContactId = addResponse.body._id;

      deleteContact(tempContactId, token).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(contracts.deleteContactResponse.response.status);
      });

      getContact(tempContactId, token).then((getResponse) => {
        expect(getResponse.status).to.eq(404);
      });
    });
  });

  // Negative test cases
  it('should not create a contact with missing fields', () => {
    const invalidContact = generateContactDataWithMissingLastName();
    
    addContact(invalidContact, token).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should not retrieve a non-existent contact', () => {
    const nonExistentContactId = 'nonexistentcontactid';
    
    getContact(nonExistentContactId, token).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should not update a non-existent contact', () => {
    const nonExistentContactId = 'nonexistentcontactid';
    const updatedContact = generateContactData();
    
    updateContact(nonExistentContactId, updatedContact, token).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('should not delete a non-existent contact', () => {
    const nonExistentContactId = 'nonexistentcontactid';
    
    deleteContact(nonExistentContactId, token).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
