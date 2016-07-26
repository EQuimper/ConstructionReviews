import React, { Component } from 'react';
import { Input, Text } from 'semantic-react';

export class CompanyDescription extends Component {

  constructor() {
    super();
    this.state = {
      description: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ description: e.target.value });
  }

  getValue() {
    return this.state.description;
  }

  render() {
    return (
      <textarea
        {...this.props}
        onChange={this.onChange}
        value={this.state.description}
      />
    );
  }
}
