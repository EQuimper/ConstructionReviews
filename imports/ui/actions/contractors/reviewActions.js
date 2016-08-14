import * as types from '../../constants';
import { Meteor } from 'meteor/meteor';

export const incrementReviewLiked = (userId, id) => {
  Meteor.call('incrementReviewLike', userId, id);
  return {
    type: types.INCREMENT_REVIEW_LIKED,
    payload: {
      userId,
      id,
    },
  };
};

export const decrementReviewLiked = (userId, id) => {
  Meteor.call('decrementReviewLike', userId, id);
  return {
    type: types.DECREMENT_REVIEW_LIKED,
    payload: {
      userId,
      id,
    },
  };
};
