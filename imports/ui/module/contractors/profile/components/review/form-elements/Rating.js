import React, { Component } from 'react';
import { Icon } from 'semantic-react';

export class Rating extends Component {
  //componentWillReceiveProps() {
  //  this.forceUpdate();
  //}
  render() {
    if (this.props.rating === 0) {
      return (
        <div>
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
        </div>
      );
    } else if (this.props.rating === 0.5) {
      return (
        <div>
          <Icon name="star half empty" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
          <Icon name="empty star" size="big" />
        </div>
      );
    }
  }
}
