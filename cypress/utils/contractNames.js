const userContractNames = [
  'addUserRequest',
  'addUserResponse',
  'getUserProfileRequest',
  'getUserProfileResponse',
  'updateUserRequest',
  'updateUserResponse',
  'deleteUserRequest',
  'deleteUserResponse',
  'logInUserRequest',
  'logInUserResponse',
  'logOutUserRequest',
  'logOutUserResponse'
];

const contactContractNames = [
  'addContactRequest',
  'addContactResponse',
  'getContactRequest',
  'getContactResponse',
  'updateContact_PUT_Request',
  'updateContact_PUT_Response',
  'updateContact_PATCH_Request',
  'updateContact_PATCH_Response',
  'deleteContactRequest',
  'deleteContactResponse'
];

module.exports = {
  userContractNames,
  contactContractNames
};
