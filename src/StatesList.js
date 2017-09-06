import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { BASE_URL } from './common';

class StateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectiondata: []
    };
  }
  componentDidMount() {
    /* Get Data from Fetch For Section 1 */
    const URL = `${BASE_URL}states`;
    const _this = this;
    fetch(URL)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.setState({ sectiondata: data });
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
            <h4>State List : </h4>
            <Row>
              {
                this.state.sectiondata.map(function (stateList) {
                  return <span>
                    <Col lg={1}>
                      <p>{stateList.name}</p>
                    </Col>
                    <Col lg={1}>
                      <p>{stateList.abbreviation}</p>
                    </Col>
                    <Col lg={1}>
                      <p>{stateList.capital}</p>
                    </Col>
                    <Col lg={1}>
                      <p>{stateList["most-populous-city"]}</p>
                    </Col>
                    <Col lg={1}>
                      <p>{stateList.population}</p>
                    </Col>
                    <Col lg={2}>
                      <p>{stateList["time-zone-1"]}</p>
                    </Col>
                    <Col lg={2}>
                      <p>{stateList["time-zone-2"]}</p>
                    </Col>
                    <Col lg={1}>
                      <p>{stateList["square-miles"]}</p>
                    </Col>
                    <Col lg={2}>
                      <p>{stateList.dst}</p>
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
export default StateList;
