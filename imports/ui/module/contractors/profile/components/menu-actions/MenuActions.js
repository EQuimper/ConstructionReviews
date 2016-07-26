import React from 'react';
import { Button, Buttons, Icon, Menu, MenuItem } from 'semantic-react';

// Components
import { Bookmarked } from './components/Bookmarked';
import { Recommended } from './components/Recommended';

export const MenuActions = () =>
  <Menu vertical secondary>
    <MenuItem>
      <Icon name="photo" /> New Photo
    </MenuItem>
    <MenuItem>
      <Icon name="share" /> Share
    </MenuItem>
    <Bookmarked />
    <Recommended />
  </Menu>;
