import React from 'react';
import { Loader } from 'semantic-react';

export const MediumLoading = () =>
  <div className="ui active inverted dimmer" id="medium-loading">
    <Loader text size="huge">Loading...</Loader>
  </div>;
