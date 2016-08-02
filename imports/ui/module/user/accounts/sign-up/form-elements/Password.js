import React, { Component } from 'react';

export class Password extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      confirm_password: '',
    };
  }

  getValue() {
    return this.state.password;
  }

  render() {
    return (
      <div className="field required">
        <label>Password</label>
        <div className="two fields required">
          <div className="field">
            <div className="ui left icon input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                pattern=".{8,}"
              />
              <i className="icon lock" />
            </div>
          </div>
          <div className="field">
            <div className="ui left icon input">
              <input
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
