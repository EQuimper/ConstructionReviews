import { Meteor } from 'meteor/meteor';
import { Reviews } from './reviews';

Meteor.methods({
  createReview(contractor, review) {
    const newReview = Reviews.insert({
      company_id: contractor._id,
      rating: review.rating,
      text: review.text,
    });
    return newReview;
  },
});
