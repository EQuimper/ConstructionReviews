import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import { Reviews } from '../../../../api/reviews/reviews';

const ListReviews = ({ reviews }) =>
  <div>
    <ul>
      {reviews.map((review, i) => (
        <li key={i}>
          <h1>{review.company_name}</h1>
          <p>{review.rating} / 5</p>
          <hr />
        </li>
      ))}
    </ul>
  </div>;

export default createContainer(() => {
  Meteor.subscribe('getAllReviews');
  return {
    reviews: Reviews.find({}).fetch(),
  };
}, ListReviews);
