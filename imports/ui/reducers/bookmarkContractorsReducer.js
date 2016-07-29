import * as types from '../constants';

const contractorsBookmark = JSON.parse(localStorage.getItem('contractorsBookmark'));

const initialState = contractorsBookmark ? contractorsBookmark : [];

export const bookmarkContractorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CONTRACTOR_TO_BOOKMARK:
      return [...state, action.payload._id];
    case types.REMOVE_CONTRACTOR_TO_BOOKMARK:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};
