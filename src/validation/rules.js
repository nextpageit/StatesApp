
import * as ErrorMessages from './errorMessages.js';

export const required = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
  };
};

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const minimumAmount = (minValue) => {
  return (text) => {
    return text >= minValue ? null : ErrorMessages.minimumAmount(minValue);
  };
};


export const notDefault = (defaultValue) => {
  return (text) => {
    return text !== defaultValue ? null : ErrorMessages.notDefault(defaultValue);
  };
};


export const validatePhone = (phoneNumber) => {
    return phoneNumber.length === 10 ? null : ErrorMessages.phoneNumber(phoneNumber);
};

export const validateSSN=()=>{
  return(ssn)=>{
    return ssn.length === 9?null:ErrorMessages.ssn(ssn);
  }
}
