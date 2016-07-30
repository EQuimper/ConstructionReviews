import * as types from '../../constants';
import { Meteor } from 'meteor/meteor';

export const incrementReviewLiked = id => {
  let reviewsContractorFavorite = JSON.parse(localStorage.getItem('reviewsContractorFavorite'));

  if (reviewsContractorFavorite) reviewsContractorFavorite = [...reviewsContractorFavorite, id];
  else reviewsContractorFavorite = [id];

  localStorage.setItem('reviewsContractorFavorite', JSON.stringify(reviewsContractorFavorite));
  Meteor.call('incrementReviewLike', id);
  return {
    type: types.INCREMENT_REVIEW_LIKED,
    payload: id,
  };
};

export const decrementReviewLiked = id => {
  let reviewsContractorFavorite = JSON.parse(localStorage.getItem('reviewsContractorFavorite'));
  if (reviewsContractorFavorite) {
    reviewsContractorFavorite = reviewsContractorFavorite.filter(item => item !== id);
    localStorage.setItem('reviewsContractorFavorite', JSON.stringify(reviewsContractorFavorite));
  }
  Meteor.call('decrementReviewLike', id);
  return {
    type: types.DECREMENT_REVIEW_LIKED,
    payload: id,
  };
};
