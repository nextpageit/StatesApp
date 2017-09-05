
const validate = values => {
  const errors = {};  
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
