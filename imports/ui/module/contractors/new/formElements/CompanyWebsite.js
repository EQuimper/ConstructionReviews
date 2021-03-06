import React, { Component } from 'react';
import { Input } from 'semantic-react';

export class CompanyWebsite extends Component {

  constructor() {
    super();
    this.state = {
      company_website: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ company_website: e.target.value });
  }

  getValue() {
    return this.state.company_website;
  }

  render() {
    return (
      <Input
        label="http://"
        {...this.props}
        onChange={this.onChange}
        value={this.state.company_website}
      />
    );
  }
}
