import React, { Component } from 'react';
import { Icon, MenuItem } from 'semantic-react';

export class Bookmarked extends Component {
  constructor() {
    super();
    this.state = {
      bookmarked: false,
    };
  }

  handleBookmarked() {
    this.setState({
      bookmarked: !this.state.bookmarked,
    });
  }

  render() {
    return (
      <MenuItem onClick={() => this.handleBookmarked()}>
        {this.state.bookmarked
          ? <Icon name="bookmark green" />
          : <Icon name="outline bookmark green" />
        } Bookmark
      </MenuItem>
    );
  }
}
