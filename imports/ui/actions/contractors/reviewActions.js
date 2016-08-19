import * as types from '../../constants';
import { Meteor } from 'meteor/meteor';

export const incrementReviewLiked = (id) => {
  Meteor.call('incrementReviewLike', id);
  return {
    type: types.INCREMENT_REVIEW_LIKED,
    payload: id,
  };
};

export const decrementReviewLiked = (id) => {
  Meteor.call('decrementReviewLike', id);
  return {
    type: types.DECREMENT_REVIEW_LIKED,
    payload: id,
  };
};
