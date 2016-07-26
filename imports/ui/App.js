import React, { PropTypes } from 'react';
import { NavBar } from './layouts/NavBar';

export const App = ({ children }) =>
  <div>
    <NavBar />
    {children}
  </div>;

App.propTypes = {
  children: PropTypes.element.isRequired,
};
