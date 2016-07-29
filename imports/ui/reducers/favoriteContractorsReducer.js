import * as types from '../constants';

const contractorsFavorite = JSON.parse(localStorage.getItem('contractorsFavorite'));

const initialState = contractorsFavorite ? contractorsFavorite : [];

export const favoriteContractorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CONTRACTOR_TO_FAVORITE:
      return [...state, action.payload._id];
    case types.REMOVE_CONTRACTOR_TO_FAVORITE:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};

export const recommendedCounterReducer = (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT_RECOMMENDED_COUNT:
      return state + 1;
    case types.DECREMENT_RECOMMENDED_COUNT:
      return state - 1;
    default:
      return state;
  }
};
