import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { favoriteContractorsReducer } from './favoriteContractorsReducer';
import { bookmarkContractorsReducer } from './bookmarkContractorsReducer';

export default combineReducers({
  favoriteContractors: favoriteContractorsReducer,
  bookmarkContractors: bookmarkContractorsReducer,
  routing: routerReducer,
});
