import * as types from '../constants';

const initialState = {
  favoriteContractors: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CONTRACTOR_TO_FAVORITE:
      return [
        ...state.favoriteContractors,
        action.payload,
      ];
    default:
      return state;
  }
};
