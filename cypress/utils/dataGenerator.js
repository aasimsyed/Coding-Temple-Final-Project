import { name, internet, date, phone as _phone, address } from 'faker';

export function generateUserData() {
  return {
    firstName: name.firstName(),
    lastName: name.lastName(),
    email: internet.email().toLowerCase(),
    password: internet.password()
  };
}
export function generateContactData() {
  return {
    firstName: name.firstName(),
    lastName: name.lastName(),
    birthdate: date.past().toISOString().split('T')[0],
    email: internet.email().toLowerCase(),
    phone: _phone.phoneNumber('###########'),
    street1: address.streetAddress(),
    street2: address.secondaryAddress(),
    city: address.city(),
    stateProvince: address.state(),
    postalCode: address.zipCode(),
    country: address.country()
  };
}

export function generateContactDataWithMissingLastName() {
  return {
    firstName: name.firstName(),
    email: internet.email().toLowerCase()
  };
}