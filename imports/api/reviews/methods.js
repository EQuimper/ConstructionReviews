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
      usersLiked: [],
      usersDisLiked: [],
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
  deleteReview(contractor, review) {
    check(contractor, Object);
    check(review, Object);
    const user = Meteor.users.findOne(this.userId);
    if (review.user.userId !== user._id) {
      throw Meteor.Error(503, 'not-authorized');
    }
    Contractors.update(contractor._id, {
      $pull: {
        reviews: {
          id: review._id,
        },
      },
    });
    Reviews.remove(review._id);
  },
  incrementReviewLike(id) {
    check(id, String);
    Reviews.update(id, {
      $addToSet: {
        usersLiked: this.userId,
      },
    });
  },
  decrementReviewLike(id) {
    check(id, String);
    Reviews.update(id, {
      $pull: {
        usersLiked: this.userId,
      },
    });
  },
  addReviewDisLike(id) {
    check(id, String);
    Reviews.update(id, {
      $addToSet: {
        usersDisLiked: this.userId,
      },
    });
  },
  removeReviewDisLike(id) {
    check(id, String);
    Reviews.update(id, {
      $pull: {
        usersDisLiked: this.userId,
      },
    });
  },
});
