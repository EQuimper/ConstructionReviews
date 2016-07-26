import React, { Component } from 'react';
import { Icon, MenuItem } from 'semantic-react';

export class Recommended extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
  }

  handleLiked() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    return (
      <MenuItem onClick={() => this.handleLiked()}>
        {this.state.liked
          ? <Icon name="heart red" />
          : <Icon name="outline heart red" />
        } Recommended
      </MenuItem>
    );
  }
}
