// cypress/integration/api/user.spec.js
import contracts from '../../../contracts';
import { generateUserData } from '../../utils/dataGenerator';
import { login, addUser, getUser, deleteUser, logout, updateUser } from '../../utils/userUtils';

describe('API Tests for User Endpoints', () => {
  let token;
  let userId;
  let newUser;

  before(() => {
    newUser = generateUserData();

    addUser(newUser).then((response) => {
      token = response.body.token;
      userId = response.body.user._id;
      expect(response.status).to.eq(contracts.addUserResponse.response.status);
      expect(token).to.exist;
      expect(userId).to.exist;
      expect(response.body.user.firstName).to.eq(newUser.firstName);
      expect(response.body.user.lastName).to.eq(newUser.lastName);
      expect(response.body.user.email).to.eq(newUser.email.toLowerCase());
    });
  });

  after(() => {
    login(newUser.email, newUser.password).then((loginResponse) => {
      deleteUser(loginResponse.body.token).then((response) => {
        expect(response.status).to.eq(contracts.deleteUserResponse.response.status);
      });
    });
  });

  it('should log in the user', () => {
    login(newUser.email, newUser.password).then((loginResponse) => {
      token = loginResponse.body.token;
      expect(loginResponse.status).to.eq(contracts.logInUserResponse.response.status);
      expect(token).to.exist;
    });
  });

  it('should retrieve the user profile', () => {
    getUser(token).then((response) => {
      expect(response.status).to.eq(contracts.getUserProfileResponse.response.status);
      expect(response.body._id).to.eq(userId);
      expect(response.body.firstName).to.eq(newUser.firstName);
      expect(response.body.lastName).to.eq(newUser.lastName);
    });
  });

  it('should update the user profile', () => {
    const updatedUser = generateUserData();

    logout(token).then(() => {
      addUser(generateUserData()).then((addUserResponse) => {
        const newToken = addUserResponse.body.token;
        const newUserId = addUserResponse.body.user._id;

        updateUser(newToken, updatedUser).then((updateResponse) => {
          expect(updateResponse.status).to.eq(contracts.updateUserResponse.response.status);
          expect(updateResponse.body._id).to.eq(newUserId);
          expect(updateResponse.body.firstName).to.eq(updatedUser.firstName);
          expect(updateResponse.body.lastName).to.eq(updatedUser.lastName);

          deleteUser(newToken).then((deleteResponse) => {
            expect(deleteResponse.status).to.eq(contracts.deleteUserResponse.response.status);
          });
        });
      });
    });
  });

  it('should log out the user', () => {
    login(newUser.email, newUser.password).then((loginResponse) => {
      logout(loginResponse.body.token).then((response) => {
        expect(response.status).to.eq(contracts.logOutUserResponse.response.status);
        token = null;
      });
    });
  });

  // Negative test cases
  it('should not create a user with an existing email', () => {
    const duplicateUser = generateUserData();
    duplicateUser.email = newUser.email;

    login(newUser.email, newUser.password).then((loginResponse) => {
      logout(loginResponse.body.token).then(() => {
        addUser(duplicateUser).then((duplicateResponse) => {
          expect(duplicateResponse.status).to.eq(400);
        });
      });
    });
  });

  it('should not log in with incorrect password', () => {
    login(newUser.email, 'wrongPassword').then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('should not retrieve user profile without token', () => {
    getUser(null).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('should not update user profile with invalid token', () => {
    const updatedUser = generateUserData();

    updateUser('invalidToken', updatedUser).then((response) => {
      expect(response.status).to.eq(401);
    });
  });

  it('should not delete user with invalid token', () => {
    deleteUser('invalidToken').then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
