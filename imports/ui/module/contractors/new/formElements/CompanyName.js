import React, { Component } from 'react';
import { Input } from 'semantic-react';

export class CompanyName extends Component {

  constructor() {
    super();
    this.state = {
      company_name: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ company_name: e.target.value });
  }

  getValue() {
    return this.state.company_name;
  }

  render() {
    return (
      <Input {...this.props} onChange={this.onChange} value={this.state.company_name} placeholder={"Company Name"} />
    );
  }
}
