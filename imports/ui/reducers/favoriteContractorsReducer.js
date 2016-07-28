import * as types from '../constants';

export const favoriteContractorsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CONTRACTOR_TO_FAVORITE:
      return [
        ...state,
        action.payload,
      ];
    case types.REMOVE_CONTRACTOR_TO_FAVORITE:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};
