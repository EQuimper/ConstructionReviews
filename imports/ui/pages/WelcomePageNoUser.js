import React from 'react';
import { browserHistory } from 'react-router';

export const WelcomePageNoUser = () =>
  <div className="welcome-page-container">
    <div className="welcome-page-container-blue-side">
      <div className="titleContainer" onClick={() => browserHistory.push('/')}>
        <h1>Find your dream's employee</h1>
      </div>
    </div>
    <div className="welcome-page-container-red-side">
      <div className="titleContainer" onClick={() => browserHistory.push('/')}>
        <h1>Find your dream's job</h1>
      </div>
    </div>
    <div className="welcome-page-container-gray-side">
      <div className="titleContainer" onClick={() => browserHistory.push('/contractors')}>
        <h1>Find your dream's contractor</h1>
      </div>
    </div>
  </div>;
