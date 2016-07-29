import * as types from '../constants';

const contractorsFavorite = JSON.parse(localStorage.getItem('contractorsFavorite'));

const initialState = [...contractorsFavorite];

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
