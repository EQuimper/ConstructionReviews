import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

//import { contractorsReducer } from './contractors';
//import { visibilityFilter } from './visibilityFilter';

export default combineReducers({
  routing: routerReducer,
});
