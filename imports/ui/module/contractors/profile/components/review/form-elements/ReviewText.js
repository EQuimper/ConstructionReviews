import React, { Component } from 'react';
import { Input, Text } from 'semantic-react';

export class ReviewText extends Component {
  constructor() {
    super();
    this.state = {
      review_text: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ review_text: e.target.value });
  }

  getValue() {
    return this.state.review_text;
  }

  render() {
    return (
      <textarea
        {...this.props}
        onChange={this.onChange}
        value={this.state.review_text}
      />
    );
  }
}
