import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reviews } from './reviews';
import { Contractors } from '../contractors/contractors';

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
      usersLiked: [],
      createdAt: new Date(),
    });
    Contractors.update(contractor._id, {
      $addToSet: {
        reviews: {
          id: newReview,
          rating: review.rating,
        },
      },
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
        usersLiked: userId,
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
        usersLiked: userId,
      },
      $inc: {
        like: -1,
      },
    });
  },
});
