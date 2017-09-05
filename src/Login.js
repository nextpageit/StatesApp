import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validation/validate';
import renderfieldGroup from './validation/renderfieldGroup';
import {BASE_URL} from './common';
import $ from "jquery";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit() {
    /* Login Details */
    const URL = `${BASE_URL}login`;  

    fetch(URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state.username,
        password: this.state.password,
      })
    })
      .then(response => response.json())
      .then(json => {

        if (json.result) {
          //location.href ='/getstatelist';
          alert('Login Successfully!');
        }
        

      })
      .catch((error) => {
        //alert(error);
        alert('Wrong username and password entered');
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

      <form id="login-form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Login Form</h3>
        <Field type="text" component={renderfieldGroup} name="username"
          placeholder='Username' onChange={(event, newValue) => this.setState({ username: newValue })} />
        
        <Field component={renderfieldGroup} name="password" type="password" hintText="Enter your Password" floatingLabelText="Password"
          placeholder='Password' onChange={(event, newValue) => this.setState({ password: newValue })} />
        <br />

        <button type="submit" >Sign In</button>



        {/* <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.onSubmit(event)} /> */}


        {/* <Field
          hintText="Enter your Username"
          floatingLabelText="Username"
          onChange={(event, newValue) => this.setState({ username: newValue })}
        />
        <br />
        <Field
          type="password"
          hintText="Enter your Password"
          floatingLabelText="Password"
          onChange={(event, newValue) => this.setState({ password: newValue })}
        />
        <br />
        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.onSubmit(event)} />  */}
      </form>
    );
  }
}
// export default Login;

export default reduxForm({
  form: 'login', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(Login);