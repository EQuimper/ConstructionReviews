import React from 'react';
import { Icon, Menu, MenuItem } from 'semantic-react';

// Components
import Bookmarked from './components/Bookmarked';
import Recommended from './components/Recommended';
import Shared from './components/Shared';

export const MenuActions = ({ contractor }) =>
  <Menu vertical secondary text>
    <Shared />
    <MenuItem>
      <Icon name="photo" size="large" /> Add photo
    </MenuItem>
    <Bookmarked contractor={contractor} />
    <Recommended contractor={contractor} />
  </Menu>;
