import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Provider } from 'react-redux';
import { store } from '../../ui/configureStore';

import routes from './routes';

const Root = () =>
  <Provider store={store}>
    {routes}
  </Provider>;

Meteor.startup(() => {
  render(
    <Root />,
    document.getElementById('app')
  );
});
