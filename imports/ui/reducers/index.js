import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { favoriteContractorsReducer } from './favoriteContractorsReducer';

export default combineReducers({
  favoriteContractors: favoriteContractorsReducer,
  routing: routerReducer,
});
