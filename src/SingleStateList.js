import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import React, { Component } from 'react';
import Select from 'react-select';
import { Field, reduxForm } from 'redux-form';
import { BASE_URL } from './common';
import $ from "jquery";

var axios = require('axios');
class SingleStateList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlestatedata: {}
    };
    /* Set State For Function logChange() */
    this.logChange = this.logChange.bind(this);
  }

  logChange(val) {       
    let url = `${BASE_URL}states/` + val;    
    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(json => {
        this.setState({ singlestatedata: json });
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }
  render() {
    const RenderSelectAsync = ({
      input,
      placeholder,
      simpleValue,
      meta: {
        touched,
        error
      },
      ...field
    }) => (
        <div>
          <Select.Async
            simpleValue={simpleValue}
            errorText={touched && error}
            value={input.value}
            className="defautSelectParent"
            placeholder={'Select State'}
            onBlur={() => input.onBlur(input.value)}
            onChange={(value) => {
              this.logChange(value.label)
              input.onChange(value)
            }}
            loadOptions={field.loadOptions}
            {...field} />
          <div>{(touched && error) && <div
            style={{
              'fontSize': '12px',
              'color': 'rgb(244, 67, 54)'
            }}>{error}</div>}</div>
        </div>
      );

    const getOptions = (input) => {
      const URL_Get = `${BASE_URL}states/abbreviations`;
      return axios.get(URL_Get)
        .then(function (response) {
          let options = response.data.map(abbrev => ({ value: abbrev, label: abbrev }));
          return { options };
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return (
      <section>
        <h4>State List By Abbrevation : </h4>
        <Field component={RenderSelectAsync} name="ddlStateAbbrev" className='formElement' loadOptions={getOptions} />
        {/* Get Single State Lists*/}
        <Grid fluid>          
          <div className="statelist">
            <Row>
              {
                <span>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata.name}</p>
                  </Col>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata.abbreviation}</p>
                  </Col>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata.capital}</p>
                  </Col>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata["most-populous-city"]}</p>
                  </Col>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata.population}</p>
                  </Col>
                  <Col lg={2}>
                    <p>{this.state.singlestatedata["time-zone-1"]}</p>
                  </Col>
                  <Col lg={2}>
                    <p>{this.state.singlestatedata["time-zone-2"]}</p>
                  </Col>
                  <Col lg={1}>
                    <p>{this.state.singlestatedata["square-miles"]}</p>
                  </Col>
                  <Col lg={2}>
                    <p>{this.state.singlestatedata.dst}</p>
                  </Col>
                </span>
              }
            </Row>
            
          </div>
        </Grid>
        {/* Single State Lists End */}
      </section >
    );
  }
}
//export default SingleStateList;
export default reduxForm({
  form: 'SingleStateList', //        <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true
})(SingleStateList);