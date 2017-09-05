
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First Name is required';
  }
  if (!values.lastName) {
    errors.lastName = 'Last Name is required';
  }
  if (!values.funeralHomeId) {
    errors.funeralHomeId = 'Funeral Home is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.mobileNo) {
    errors.mobileNo = 'Phone Number is required';
  }else {
    values.mobileNo = values.mobileNo.replace(/_/g, "").replace(/-/g, "");
        if (values.mobileNo.length != 10) {
      errors.mobileNo = 'Please enter 10 digit number';
    }
  }
  if (!values.birthDate) {
        errors.birthDate = 'BirthDate is required';
  }
  if (!values.address1) {
    errors.address1 = 'Address line 1 is required';
  }
  if (!values.city) {
    errors.city = 'City is required';
  }
  if (!values.state) {
    errors.state = 'State is required';
  }
  if (!values.zipCode) {
    errors.zipCode = 'ZipCode is required';
  } else if (values.zipCode.length < 5) {
    errors.zipCode = 'ZipCode must be at least 5 characters';
  }
  if (!values.ssn) {
    errors.ssn = 'Social Security Number is required';
  } else {
    values.ssn = values
      .ssn
      .replace(/_/g, "")
      .replace(/-/g, "");
    if (values.ssn.length != 9) {
      errors.ssn = 'Please enter 9 digit SSN';
    }
  }
  if (!values.monthlyIncome) {
    errors.monthlyIncome = 'Monthly Income after taxes is required';
  }
  if (!values.accountNumber) {
    errors.accountNumber = 'Account number is required';
  }
  // else if (!values.accountNumber.isNAN) {   errors.accountNumber = 'Account
  // number is not no'; }
  if (!values.routingNumber) {
    errors.routingNumber = 'Routing number is required';
  }

  if (!values.review_firstName) {
    errors.review_firstName = 'First Name is required';
  }
  if (!values.review_lastName) {
    errors.review_lastName = 'Last Name is required';
  }
  if (!values.review_ssn4) {
    errors.review_ssn4 = 'Social Security Number is required';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  }
  if (!values.phone) {
    errors.phone = 'Phone is required';
  }
  if (!values.username) {
    errors.username = 'Username is required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } 
  return errors;
};
export default validate;
