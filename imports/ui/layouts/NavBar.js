import React from 'react';
import { Link } from 'react-router';

import { Menu, MenuItem } from 'semantic-react/radium';

export const NavBar = () =>
  <Menu>
    <MenuItem color="blue">
      <Link to={"/"}>
        Home
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to={"/contractors"}>
        Contractors
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to={"/reviews"}>
        Reviews
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to={"/contractors/new"}>
        New Contractor
      </Link>
    </MenuItem>
    <MenuItem>
      <Link to={"/reviews/new"}>
        New Review
      </Link>
    </MenuItem>
  </Menu>;
