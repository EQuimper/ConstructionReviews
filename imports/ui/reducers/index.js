import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import { contractorsReducer } from './contractors';
//import { visibilityFilter } from './visibilityFilter';
import { favoritesReducer } from './favoritesReducer';

export default combineReducers({
  favorites: favoritesReducer,
  routing: routerReducer,
});
