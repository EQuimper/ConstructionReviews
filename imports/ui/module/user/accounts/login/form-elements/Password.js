import React, { Component } from 'react';

export class Password extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
    this.passwordChange = this.passwordChange.bind(this);
  }

  getValue() {
    return this.state.password;
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <div className="field">
        <label>Password</label>
        <div className="field">
          <div className="ui left icon input">
            <input
              type="password"
              onChange={this.passwordChange}
              placeholder="Password"
            />
            <i className="icon lock" />
          </div>
        </div>
      </div>
    );
  }
}
