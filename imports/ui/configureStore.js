import { applyMiddleware, createStore, compose } from 'redux';
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = [
  createLogger(),
  thunk,
];

const enhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export const store = createStore(
  rootReducer,
  {},
  enhancers,
);

// Make the hot reload work with Redux
if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = rootReducer;
    store.replaceReducer(nextRootReducer);
  });
}


// Make the history work with browserHistory
export const history = syncHistoryWithStore(browserHistory, store);
