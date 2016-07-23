import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import { Button } from 'semantic-react';

export class NewContractor extends Component {
  handleSubmit() {
    const name = this.refs.name.value;
    const city = this.refs.city.value;
    const province = this.refs.province.value;
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
      <div>
        <h1>New Contractor</h1>
        <form onSubmit={(e) => (e.preventDefault(), this.handleSubmit())}>
          <input type="text" placeholder="Name" ref="name" />
          <input type="text" placeholder="City" ref="city" />
          <input type="text" placeholder="Province" ref="province" />
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
}
