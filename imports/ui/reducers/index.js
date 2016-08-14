import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import { favoriteContractorsReducer } from './favoriteContractorsReducer';
import { bookmarkContractorsReducer } from './bookmarkContractorsReducer';
// import { reviewsContractorReducer } from './reviewsContractorReducer';

export default combineReducers({
  bookmarkContractors: bookmarkContractorsReducer,
  routing: routerReducer,
});
