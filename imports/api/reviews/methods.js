import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reviews } from './reviews';

Meteor.methods({
  createReview(user, contractor, review) {
    check(user, Object);
    check(contractor, Object);
    check(review, Object);
    const newReview = Reviews.insert({
      user,
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
  incrementReviewLike(userId, id) {
    check(userId, String);
    check(id, String);
    Reviews.update(id, {
      $addToSet: {
        users: userId,
      },
      $inc: {
        like: +1,
      },
    });
  },
});

Meteor.methods({
  decrementReviewLike(userId, id) {
    check(userId, String);
    check(id, String);
    Reviews.update(id, {
      $pull: {
        users: userId,
      },
      $inc: {
        like: -1,
      },
    });
  },
});
