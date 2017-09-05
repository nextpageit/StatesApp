import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <div id="Header">
        <div className="headerBlock">
          <Row>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <a href="login" className="ripple">
                    <span>Login</span>
                  </a>
                </li>
                <li>
                  <a href="getstatelist" className="ripple">
                    <span>States List</span>
                  </a>
                </li>
                <li>
                  <a href="getstatelistabb" className="ripple">
                    <span>Single State</span>
                  </a>
                </li>
                <li>
                  <a href="addguestdata" className="ripple">
                    <span>Add Guest Book</span>
                  </a>
                </li>
                <li>
                  <a href="getguestdata" className="ripple">
                    <span>Guest Book Messages</span>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:8888/logout" className="ripple">
                    <span>Signout!</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Row>
        </div>
      </div>
    )
  }
}

ReactDom.render(
  <Header />, document.getElementById('header'));
