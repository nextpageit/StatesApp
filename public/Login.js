import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';

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

    // var data = {
    //   "user": "alice", "password": "password1"
    // }


    fetch('http://localhost:8888/login', {
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
          alert(json.result);
        }
        else {
          alert(json.result);
        }
      })
      .catch((error) => {
        alert(error);
        return null;
      });

  }
  render() {


    return (
      <div>
        <MuiThemeProvider>
          <div>

            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.onSubmit(event)} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;