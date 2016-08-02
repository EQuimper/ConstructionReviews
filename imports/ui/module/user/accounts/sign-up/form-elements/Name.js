import React, { Component } from 'react';

export class Name extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
    };
    this.fistNameChange = this.fistNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
  }

  getValue() {
    return this.state;
  }

  fistNameChange(e) {
    this.setState({ first_name: e.target.value });
  }

  lastNameChange(e) {
    this.setState({ last_name: e.target.value });
  }

  usernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="field required">
        <label>Name</label>
        <div className="two fields">
          <div className="field required">
            <div className="ui left icon input">
              <input
                onChange={this.fistNameChange}
                type="text"
                name="first-name"
                placeholder="First Name"
              />
              <i className="icon user" />
            </div>
          </div>
          <div className="field required">
            <div className="ui left icon input">
              <input
                onChange={this.lastNameChange}
                type="text"
                placeholder="Last Name"
              />
              <i className="icon user" />
            </div>
          </div>
        </div>
        <div className="field required">
          <label>Username</label>
          <div className="ui left icon input">
            <input
              onChange={this.usernameChange}
              type="text"
              placeholder="Username"
            />
            <i className="icon user" />
          </div>
        </div>
      </div>
    );
  }
}
