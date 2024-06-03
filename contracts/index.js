// contracts/index.js
module.exports = {
  // User Contracts
  addUserRequest: require('./addUserRequest.json'),
  addUserResponse: require('./addUserResponse.json'),
  getUserProfileRequest: require('./getUserProfileRequest.json'),
  getUserProfileResponse: require('./getUserProfileResponse.json'),
  updateUserRequest: require('./updateUserRequest.json'),
  updateUserResponse: require('./updateUserResponse.json'),
  deleteUserRequest: require('./deleteUserRequest.json'),
  deleteUserResponse: require('./deleteUserResponse.json'),
  logInUserRequest: require('./logInUserRequest.json'),
  logInUserResponse: require('./logInUserResponse.json'),
  logOutUserRequest: require('./logOutUserRequest.json'),
  logOutUserResponse: require('./logOutUserResponse.json'),

  // Contact Contracts
  addContactRequest: require('./addContactRequest.json'),
  addContactResponse: require('./addContactResponse.json'),
  getContactRequest: require('./getContactRequest.json'),
  getContactResponse: require('./getContactResponse.json'),
  getContactListRequest: require('./getContactListRequest.json'),
  getContactListResponse: require('./getContactListResponse.json'),
  updateContact_PATCH_Request: require('./updateContact_PATCH_Request.json'),
  updateContact_PATCH_Response: require('./updateContact_PATCH_Response.json'),
  updateContact_PUT_Request: require('./updateContact_PUT_Request.json'),
  updateContact_PUT_Response: require('./updateContact_PUT_Response.json'),
  deleteContactRequest: require('./deleteContactRequest.json'),
  deleteContactResponse: require('./deleteContactResponse.json')
};
