import React, { Component } from 'react';
import { Input } from 'semantic-react';

export class PhoneNumber extends Component {
  constructor() {
    super();
    this.state = {
      phone_number: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({
      phone_number: value,
    });
  }

  getValue() {
    return this.state.phone_number;
  }

  render() {
    return (
      <Input
        state={this.state.error ? 'error' : this.state.error}
        icon="call square"
        onChange={this.onChange}
        placeholder="(xxx) xxx-xxxx"
        type="tel"
        {...this.props}
        value={this.state.phone_number}
      />
    );
  }
}
