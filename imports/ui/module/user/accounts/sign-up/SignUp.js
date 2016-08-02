import React, { Component } from 'react';

// Form Elements
import { Name } from './form-elements/Name';

export class SignUp extends Component {
  render() {
    return (
      <div className="sign-up-user-page">
        <div className="sign-up-user-wrapper">
          <div className="ui text container">
            <h2>Sign Up</h2>
            <form className="ui form">
              <Name />
              <div className="field required">
                <label>Password</label>
                <div className="two fields required">
                  <div className="field">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      pattern=".{8,}"
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm Password"
                      pattern=".{8,}"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
