import React from 'react';
import { Icon, Menu, MenuItem } from 'semantic-react';

// Components
import Bookmarked from './components/Bookmarked';
import Recommended from './components/Recommended';

export const MenuActions = ({ contractor }) =>
  <Menu vertical secondary text>
    <MenuItem>
      <Icon name="photo" size="large" /> Add photo
    </MenuItem>
    <MenuItem>
      <Icon name="share" size="large" /> Share
    </MenuItem>
    <Bookmarked contractor={contractor} />
    <Recommended contractor={contractor} />
  </Menu>;
