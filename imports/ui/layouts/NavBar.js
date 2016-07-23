import React from 'react';
import { browserHistory } from 'react-router';
import { Menu, MenuItem } from 'semantic-react/radium';

export const NavBar = () =>
  <Menu>
    <MenuItem onClick={() => browserHistory.push('/')}>
        Home
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/contractors')}>
      Contractors
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/reviews')}>
      Reviews
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/contractors/new')}>
      New Contractor
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/reviews/new')}>
      New Review
    </MenuItem>
  </Menu>;
