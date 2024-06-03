// cypress/utils/userUtils.js
import { loadContracts } from './contractLoader';
import { userContractNames } from './contractNames';

const contracts = loadContracts(userContractNames);
const apiUrl = Cypress.env('contactListUrl');

const login = (email, password) => {
  return cy.request({
    method: contracts.logInUserRequest.request.method,
    url: `${apiUrl}${contracts.logInUserRequest.request.url}`,
    headers: {
      'Content-Type': contracts.logInUserRequest.request.headers['Content-Type']
    },
    body: { email, password },
    failOnStatusCode: false
  });
};

const addUser = (userData) => {
  return cy.request({
    method: contracts.addUserRequest.request.method,
    url: `${apiUrl}${contracts.addUserRequest.request.url}`,
    headers: {
      'Content-Type': contracts.addUserRequest.request.headers['Content-Type']
    },
    body: userData,
    failOnStatusCode: false
  });
};

const getUser = (userToken) => {
  return cy.request({
    method: contracts.getUserProfileRequest.request.method,
    url: `${apiUrl}${contracts.getUserProfileRequest.request.url}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': contracts.getUserProfileRequest.request.headers['Content-Type']
    },
    failOnStatusCode: false
  });
};

const deleteUser = (userToken) => {
  return cy.request({
    method: contracts.deleteUserRequest.request.method,
    url: `${apiUrl}${contracts.deleteUserRequest.request.url}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': contracts.deleteUserRequest.request.headers['Content-Type']
    },
    failOnStatusCode: false
  });
};

const logout = (userToken) => {
  return cy.request({
    method: contracts.logOutUserRequest.request.method,
    url: `${apiUrl}${contracts.logOutUserRequest.request.url}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': contracts.logOutUserRequest.request.headers['Content-Type']
    }
  });
};

const updateUser = (userToken, userData) => {
  return cy.request({
    method: contracts.updateUserRequest.request.method,
    url: `${apiUrl}${contracts.updateUserRequest.request.url}`,
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Content-Type': contracts.updateUserRequest.request.headers['Content-Type']
    },
    body: userData,
    failOnStatusCode: false
  });
};

export default {
  login,
  addUser,
  getUser,
  deleteUser,
  logout,
  updateUser
};
