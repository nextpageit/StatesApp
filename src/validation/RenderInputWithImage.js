import React from 'react';
import MaskedInput from 'react-maskedinput';

const RenderInputWithImage = ({ input,placeholder, label, type,imgSrc,mask, meta: { touched, error }}) => (
  <div>
    <label>{label}</label>
    <div className="input-group">
      <span className="input-group-addon" id="basic-addon1">
        <img src={imgSrc} />
      </span>
          <MaskedInput {...input} mask={mask} type={type} placeholder={placeholder} className="form-control txtSSNMask"aria-describedby="basic-addon1" />
   {/* <input {...input} placeholder={placeholder} type={type} className="form-control"aria-describedby="basic-addon1"  /> */}
         </div>
          <div>{(touched && error) &&
        <div style={{ 'fontSize': '12px', 'color': 'rgb(244, 67, 54)' }}>{error}</div>}</div>
  </div>
);
    
export default RenderInputWithImage;
