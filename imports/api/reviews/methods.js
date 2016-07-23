import { Meteor } from 'meteor/meteor';
import { Reviews } from './reviews';

Meteor.methods({
  createReview(review) {
    const newReview = Reviews.insert({
      company_name: review.company_name,
      rating: review.rating,
    });
    return newReview;
  },
});
