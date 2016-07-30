import React, { Component } from 'react';

export class MessageRating extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }
  render() {
    const { value } = this.props;
    console.log(value);
    let msg = '';
    if (value === 0) msg = 'Start Rating';
    else if (value === 1) msg = 'Terrible';
    else if (value === 2) msg = 'Poor';
    else if (value === 3) msg = 'Average';
    else if (value === 4) msg = 'Very Good';
    else if (value === 5) msg = 'Excellent';
    return <span>{msg}</span>;
  }
}
