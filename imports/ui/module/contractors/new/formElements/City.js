import React, { Component } from 'react';
import { Input } from 'semantic-react';

export class City extends Component {

  constructor() {
    super();
    this.state = {
      city: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ city: e.target.value });
  }

  getValue() {
    return this.state.city;
  }

  render() {
    return (
      <Input
        {...this.props}
        onChange={this.onChange}
        value={this.state.city}
      />
    );
  }
}
