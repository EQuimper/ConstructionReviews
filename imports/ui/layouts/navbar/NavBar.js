import React from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { Menu, MenuItem, Icon } from 'semantic-react';

import { Dropdown } from './components/Dropdown';

export const NavBar = () =>
  <Menu pointing>
    <MenuItem active onClick={() => browserHistory.push('/')}>
        Home
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/contractors')}>
      Contractors
    </MenuItem>
    <MenuItem onClick={() => browserHistory.push('/contractors/new')}>
      New Contractor
    </MenuItem>
    <div className="right menu">
      <MenuItem>
        <Icon name="alarm outline" fitted />
      </MenuItem>
      {Meteor.userId() ?
        <Dropdown /> :
        <MenuItem onClick={() => browserHistory.push('/user/login')}>
          Sign Up | Log In
        </MenuItem>
      }
    </div>
  </Menu>;
