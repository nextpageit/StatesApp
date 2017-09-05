
export const isRequired = fieldName => `${fieldName} is required`;

export const mustMatch = otherFieldName => {
  return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = length => {
  return (fieldName) => `${fieldName} must be at least ${length} characters`;
};
export const minimumAmount = length => {
  return (fieldName) => `${fieldName} must be at least $ ${length} `;
};
export const notDefault= value =>{
  return (fieldName) => `Please select an option for ${fieldName} `;
};


export const phoneNumber= value =>{
  return (fieldName) => `Invalid  ${fieldName} `;
};
export const ssn= value =>{
  return (fieldName) => `Invalid   ${fieldName} `;
};
