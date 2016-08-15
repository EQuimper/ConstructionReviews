import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reviews } from './reviews';
import { Contractors } from '../contractors/contractors';

Meteor.methods({
  createReview(contractor, review) {
    check(contractor, Object);
    check(review, Object);
    const user = Meteor.users.findOne(this.userId);
    const newReview = Reviews.insert({
      user: {
        userId: user._id,
        username: user.username,
      },
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
  deleteReview(review) {
    check(review, Object);
    const user = Meteor.users.findOne(this.userId);
    if (review.user.userId !== user._id) {
      throw Meteor.Error(503, 'not-authorized');
    }
    Reviews.remove(review._id);
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
