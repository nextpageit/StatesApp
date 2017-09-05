import React from 'react';

const renderField = ({ input,placeholder, label, type,mask, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} mask={mask}/>
      <div>{(touched && error) &&
        <div style={{ 'fontSize': '12px', 'color': 'rgb(244, 67, 54)' }}>{error}</div>}</div>
    </div>
  </div>
);

export default renderField;
