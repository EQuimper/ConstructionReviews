import React from 'react';
import { NavBar } from './layouts/NavBar';

export const App = ({ children }) =>
  <div>
    <NavBar />
    {children}
  </div>;
