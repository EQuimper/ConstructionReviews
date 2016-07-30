import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import { Button, Container, Field, Fields, Form } from 'semantic-react';

import { CompanyName } from './formElements/CompanyName';
import { CompanyDescription } from './formElements/CompanyDescription';
import { City } from './formElements/City';
import { Province } from './formElements/Province';
import { CompanyWebsite } from './formElements/CompanyWebsite';

export class NewContractor extends Component {
  handleSubmit() {
    const name = this.name.getValue();
    const description = this.description.getValue();
    const city = this.city.getValue();
    const province = this.province.getValue();
    const company_website = this.company_website.getValue();
    const slug = `${name}-${city}`;

    Meteor.call('addContractor', {
      name,
      description,
      city,
      province,
      company_website,
      slug,
    });

    browserHistory.push(`/contractors/profile/${name}`);
  }

  render() {
    return (
      <Container>
        <h1>New Contractor</h1>
        <Form>
          <Field required>
            <label>Company Name</label>
            <CompanyName ref={ref => this.name = ref} />
          </Field>
          <Field required>
            <label>Company Description</label>
            <CompanyDescription ref={ref => this.description = ref} />
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
          <Fields equalWidth>
            <Field>
              <label>Company Website</label>
              <CompanyWebsite ref={ref => this.company_website = ref} />
            </Field>
          </Fields>
          <Button onClick={(e) => (e.preventDefault(), this.handleSubmit())}>Submit</Button>
        </Form>
      </Container>
    );
  }
}
