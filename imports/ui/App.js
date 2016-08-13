import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { NavBar } from './layouts/navbar/NavBar';

export const App = ({ children }) => {
  if (!Meteor.userId()) {
    browserHistory.push('/user/login');
  }
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
