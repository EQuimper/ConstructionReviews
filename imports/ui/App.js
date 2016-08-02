import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { NavBar } from './layouts/NavBar';

require('velocity-animate');
require('velocity-animate/velocity.ui');

export const App = ({ children }) => {
  // if (!Meteor.user()) {
  //   browserHistory.push('/user/sign-up');
  // }
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
};
