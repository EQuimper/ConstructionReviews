import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { DropdownMenu, MenuItem } from 'semantic-react';

export class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
      menuValue: null,
    };
    this.onDropdownClick = this.onDropdownClick.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.onMenuChange = this.onMenuChange.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  onMenuChange(value) {
    this.setState({
      menuValue: value,
    });
    if (value === 1) {
      browserHistory.push('/my-account');
    } else if (value === 2) {
      Meteor.logout(() => {
        browserHistory.push('/welcome');
      });
    }
    this.setState({
      menuValue: null
    });
  }

  onDropdownClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  closeDropdown() {
    this.setState({
      active: false,
    });
  }
  render() {
    return (
      <MenuItem onClick={this.onDropdownClick}>
        <DropdownMenu
          active={this.state.active}
          label="My Account"
          menuValue={this.state.menuValue}
          onMenuItemClick={this.closeDropdown}
          onMenuChange={this.onMenuChange}
          onRequestClose={this.closeDropdown}
        >
          <MenuItem menuValue={1}>My Profile</MenuItem>
          <MenuItem menuValue={2}>Logout</MenuItem>
        </DropdownMenu>
      </MenuItem>
    );
  }
}
