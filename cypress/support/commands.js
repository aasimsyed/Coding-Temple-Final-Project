// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { login, getUser } = require('../utils/userUtils');
const { loadContracts } = require('../utils/contractLoader');
const { userContractNames } = require('../utils/contractNames');
const contracts = loadContracts(userContractNames);
import validUser from '../fixtures/validUser.json';

Cypress.Commands.add('loggedIn', () => {
  return cy.getCookie('token').then((cookie) => {
    if (cookie && cookie.value) {
      return getUser(cookie.value).then((response) => {
        return response.status === contracts.getUserProfileResponse.response.status;
      });
    } else {
      return false;
    }
  });
});

Cypress.Commands.add('login', () => {
  login(validUser.email, validUser.password).then((response) => {
    cy.setCookie('token', response.body.token);
  });
});