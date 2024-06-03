// cypress/utils/contactUtils.js
import { loadContracts } from './contractLoader';
import { contactContractNames } from './contractNames';

const contracts = loadContracts(contactContractNames);

const apiUrl = Cypress.env('contactListUrl');

const addContact = (contactData, token) => {
  return cy.request({
    method: contracts.addContactRequest.request.method,
    url: `${apiUrl}${contracts.addContactRequest.request.url}`,
    headers: {
      'Content-Type': contracts.addContactRequest.request.headers['Content-Type'],
      Authorization: `Bearer ${token}`
    },
    body: contactData,
    failOnStatusCode: false
  });
}

const getContact = (contactId, token) => {
  return cy.request({
    method: contracts.getContactRequest.request.method,
    // contracts.getContactRequest.request.url is "url": "/contacts/{{contactId}}". replace the {{contactId}} with the actual contactId
    url: `${apiUrl}${contracts.getContactRequest.request.url.replace('{{contactId}}', contactId)}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contracts.getContactRequest.request.headers['Content-Type']
    },
    failOnStatusCode: false
  });
}

const updateContact = (contactId, updatedContact, token) => {
  return cy.request({
    method: contracts.updateContact_PUT_Request.request.method,
    url: `${apiUrl}${contracts.updateContact_PUT_Request.request.url.replace('{{contactId}}', contactId)}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contracts.updateContact_PUT_Request.request.headers['Content-Type']
    },
    body: updatedContact,
    failOnStatusCode: false
  });
}

const deleteContact = (contactId, token) => {
  return cy.request({
    method: contracts.deleteContactRequest.request.method,
    url: `${apiUrl}${contracts.deleteContactRequest.request.url.replace('{{contactId}}', contactId)}`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contracts.deleteContactRequest.request.headers['Content-Type']
    },
    failOnStatusCode: false
  });
}

export default {
  addContact,
  getContact,
  updateContact,
  deleteContact
};