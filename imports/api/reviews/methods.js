import { Meteor } from 'meteor/meteor';
import { Reviews } from './reviews';

Meteor.methods({
  createReview(contractor, review) {
    const newReview = Reviews.insert({
      company_id: contractor._id,
      rating: review.rating,
      text: review.text,
      like: 0,
      createdAt: new Date(),
    });
    return newReview;
  },
});

Meteor.methods({
  incrementReviewLike(id) {
    Reviews.update(id, {
      $inc: {
        like: +1,
      },
    });
  },
});

Meteor.methods({
  decrementReviewLike(id) {
    Reviews.update(id, {
      $inc: {
        like: -1,
      },
    });
  },
});
