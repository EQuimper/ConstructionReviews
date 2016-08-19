import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Geosuggest from 'react-geosuggest';
import { Select, Option } from 'semantic-react';

export class Location extends Component {
  constructor() {
    super();
    this.state = {
      location: null,
      suggestions: [],
    };
  }

  handleOnChange() {
    const geosuggest = ReactDOM.findDOMNode(this.refs.geosuggest);
    console.log(geosuggest)
    // const suggestions = this.geosuggest.state.suggests;
    // this.setState({
    //   suggestions
    // });
  }
  getValue() {
    return this.state.location;
  }
  render() {
    return (
      <Geosuggest onChange={this.handleOnChange} ref="geosuggest" />
    );
  }
}
/*
constructor() {
  super();
  this.state = {
    active: false,
    search: '',
    province: [],
  };
}

getValue() {
  return this.state.province;
}

render() {
  return (
    <Select
      active={this.state.active}
      search
      selection
      onClick={() => this.setState({ active: true })}
      onRequestClose={() => this.setState({ active: false })}
      onSelectChange={val => this.setState({ province: val, active: false })}
      onSearchStringChange={search => this.setState({ search })}
      searchString={this.state.search}
      selected={this.state.province}
    >
      <Option value="Alberta">Alberta</Option>
      <Option value="British Columbia">British Columbia</Option>
      <Option value="Manitoba">Manitoba</Option>
      <Option value="Newfoundland and Labrador">Newfoundland and Labrador</Option>
      <Option value="New Brunswick">New Brunswick</Option>
      <Option value="Nova Scotia">Nova Scotia</Option>
      <Option value="Ontario">Ontario</Option>
      <Option value="Prince Edward Island">Prince Edward Island</Option>
      <Option value="Quebec">Quebec</Option>
      <Option value="Saskatchewan">Saskatchewan</Option>
    </Select>
  );
}
}
*/
