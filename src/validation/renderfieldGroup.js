import React from 'react';

const renderFieldGroup = ({ input,placeholder, label, type,symbol, meta: { touched, error }}) => (
<div>
    <label>{label}</label>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1">{symbol}</span>
      <input {...input} placeholder={placeholder} type={type} className="form-control" aria-describedby="basic-addon1" />
         </div>
          <div>{(touched && error) &&
        <div style={{ 'fontSize': '12px', 'color': 'rgb(244, 67, 54)' }}>{error}</div>}</div>
  </div>
);
    
export default renderFieldGroup;
