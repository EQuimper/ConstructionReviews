import React from 'react';
import { browserHistory } from 'react-router';
import { Menu, MenuItem, Icon } from 'semantic-react';

export const NavBar = () =>
  <Menu pointing>
    <MenuItem active onClick={() => browserHistory.push('/')}>
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
    <div className="right menu">
      <MenuItem>
        <Icon name="alarm outline" fitted />
      </MenuItem>
      <MenuItem onClick={() => browserHistory.push('/my-account')}>
        My Account
      </MenuItem>
    </div>
  </Menu>;
