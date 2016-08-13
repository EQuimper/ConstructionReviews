import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export class Password extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirm_password: '',
    };
    this.passwordChange = this.passwordChange.bind(this);
    this.confirmChange = this.confirmChange.bind(this);
  }

  getValue() {
    if (this.state.password !== this.state.confirm_password) {
      throw new Meteor.Error(500, 'You must have the same password');
    }
    return this.state.password;
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  confirmChange(e) {
    this.setState({ confirm_password: e.target.value });
  }

  render() {
    return (
      <div className="field required">
        <label>Password</label>
        <div className="two fields required">
          <div className="field">
            <div className="ui left icon input">
              <input
                onChange={this.passwordChange}
                type="password"
                placeholder="Password"
              />
              <i className="icon lock" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <input
                onChange={this.confirmChange}
                type="password"
                name="confirm-password"
                placeholder="Confirm Password"
                pattern=".{8,}"
              />
              <i className="icon lock" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
