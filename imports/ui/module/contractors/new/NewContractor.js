import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import { Button, Container, Field, Fields, Form } from 'semantic-react';

import { CompanyName } from './formElements/CompanyName';
import { City } from './formElements/City';
import { Province } from './formElements/Province';

export class NewContractor extends Component {
  handleSubmit() {
    const name = this.name.getValue();
    const city = this.city.getValue();
    const province = this.province.getValue();
    const slug = `${name}-${city}`;

    Meteor.call('addContractor', {
      name,
      city,
      province,
      slug,
    });

    browserHistory.push('/contractors');
  }

  render() {
    return (
      <Container>
        <h1>New Contractor</h1>
        <Form>
          <Field>
            <label>Company Name</label>
            <CompanyName ref={ref => this.name = ref} />
          </Field>
          <Fields equalWidth>
            <Field>
              <label>City</label>
              <City ref={ref => this.city = ref} />
            </Field>
            <Field>
              <label>Province</label>
              <Province ref={ref => this.province = ref} />
            </Field>
          </Fields>
          <Button onClick={(e) => (e.preventDefault(), this.handleSubmit())}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
