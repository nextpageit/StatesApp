import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { BASE_URL } from './common';
import $ from "jquery";
class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    const URL = `${BASE_URL}logout`;
    return (
      <div id="Header">
        <div className="headerBlock">
          <Row>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <a href="login">
                    <span>Login</span>
                  </a>
                </li>
                <li>
                  <a href="getstatelist">
                    <span>States List</span>
                  </a>
                </li>
                <li>
                  <a href="getstatelistabb">
                    <span>Single State</span>
                  </a>
                </li>
                <li>
                  <a href="addguestdata">
                    <span>Add Guest Book</span>
                  </a>
                </li>
                <li>
                  <a href="getguestdata">
                    <span>Guest Book Messages</span>
                  </a>
                </li>
                <li>
                  <a href={URL}>
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
