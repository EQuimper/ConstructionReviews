import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { NavBar } from './layouts/NavBar';

export const App = ({ children }) => {
  //if (!Meteor.user) {
  //  browserHistory.push('/welcome');
  //}
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
