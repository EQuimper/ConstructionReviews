import * as types from '../constants';

const reviewsContractorFavorite = JSON.parse(localStorage.getItem('reviewsContractorFavorite'));

const initialState = reviewsContractorFavorite ? reviewsContractorFavorite : [];

export const reviewsContractorReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_REVIEW_LIKED:
      return [...state, action.payload];
    case types.DECREMENT_REVIEW_LIKED:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};
