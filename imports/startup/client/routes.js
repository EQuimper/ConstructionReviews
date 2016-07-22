import React from 'react';
import {Route, Router, IndexRoute } from 'react-router';
import { history } from '../../ui/configureStore';

import { App } from '../../ui/App';

export default (
  <Router history={history}>
    <Route path={"/"} component={App} />
  </Router>
);
