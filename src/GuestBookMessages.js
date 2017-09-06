
import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {BASE_URL} from './common';

class GuestBookMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guestdata: []
    };
  }
  componentDidMount() {

    const URL = `${BASE_URL}read`;  
    const _this = this;
    fetch(URL)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({ guestdata: data });
      }).catch(function () {
        // reject(err);
      });
  }
  render() {
    return (
      <section>

        <Grid fluid>
          {/* Section 1 Start */}

          <div className="statelist">
            <h4>Guest Book Messages : </h4>
            <Row>
              {

                this.state.guestdata.map(function (guestList) {
                  return <span>
                    <Col lg={4}>
                      <p>{guestList.user}</p>
                    </Col>
                    <Col lg={4}>
                      <p>{guestList.phone}</p>
                    </Col>
                    <Col lg={4}>
                      <p>{guestList.message}</p>
                    </Col>

                  </span>
                })
              }
            </Row>
          </div>
        </Grid>
        {/* Section 1 End */}

      </section >
    );
  }
}


export default GuestBookMessages;
