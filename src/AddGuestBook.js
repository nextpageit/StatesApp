import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import validate from './validation/validate';
import renderfieldGroup from './validation/renderfieldGroup';
import {BASE_URL} from './common';
import $ from "jquery";


class AddGuestBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      phone: '',
      message: ''
    }
  }
  onSubmit() {
    // var msgs = { user: "kilroy", phone: "123 555 1212", message: "was here!" };

    const URL = `${BASE_URL}write`;   
    fetch(URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: this.state.phone, message: this.state.message
      })

    })
      .then(response => response.json())
      .then(json => {

        alert('Message Added Successfully');


      })
      .catch((error) => {
        alert("Unauthorised");
        return null;
      });
  }
  render() {
    const {
      input,
      handleSubmit,
      onBlur,
      ...props
    } = this.props;

    return (
      <form id="add-msg-guestform" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Add Guest Message </h3>
        <Field type="number" name="phone" component={renderfieldGroup}
          placeholder='Phone no' onChange={(event, newValue) => this.setState({ phone: newValue })} />
        <Field type="text" name="message" component={renderfieldGroup} placeholder='Messsage'
          onChange={(event, newValue) => this.setState({ message: newValue })}/>
        <br />
        <button type="submit">Add Message</button>        
      </form>
     
    );
  }
}

// export default AddGuestBook;

export default reduxForm({
  form: 'AddGuestBook', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(AddGuestBook);