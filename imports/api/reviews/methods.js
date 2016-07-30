import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reviews } from './reviews';

Meteor.methods({
  createReview(contractor, review) {
    check(contractor, Object);
    check(review, Object);
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
    check(id, String);
    Reviews.update(id, {
      $inc: {
        like: +1,
      },
    });
  },
});

Meteor.methods({
  decrementReviewLike(id) {
    check(id, String);
    Reviews.update(id, {
      $inc: {
        like: -1,
      },
    });
  },
});
