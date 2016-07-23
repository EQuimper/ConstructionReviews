import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

import { Button } from 'semantic-react';

export class NewReview extends Component {
  handleSubmit() {
    const company_name = this.refs.company_name.value;
    const rating = this.refs.rating.value;

    Meteor.call('createReview', {
      company_name,
      rating,
    });

    browserHistory.push('/reviews');
  }

  render() {
    return (
      <div>
        <h1>New Review</h1>
        <form onSubmit={(e) => (e.preventDefault(), this.handleSubmit())}>
          <input type="text" ref="company_name" placeholder="Company Name..." />
          <input type="number" ref="rating" placeholder="Rating..." />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

