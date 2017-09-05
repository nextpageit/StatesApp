import React from 'react';
import MaskedInput from 'react-maskedinput';

const RenderMaskedInput = ({ input,placeholder, label, type,mask, meta: { touched, error }}) => (
   <div>
    <label>{label}</label>
    <div>
      {/* <input {...input} placeholder={placeholder} type={type}/> */}
       <MaskedInput {...input} mask={mask} placeholder={placeholder} className="txtSSNMask"/>
      <div>{(touched && error) &&
        <div style={{ 'fontSize': '12px', 'color': 'rgb(244, 67, 54)' }}>{error}</div>}</div>
    </div>
  </div>
);
    
export default RenderMaskedInput;
