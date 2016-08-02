import React, { Component } from 'react';

// Form Elements
import { Name } from './form-elements/Name';
import { Password } from './form-elements/Password';

export class SignUp extends Component {
  handleSubmit() {
    const name = this.name.getValue();
    const { first_name, last_name, username } = name;
    console.log(first_name, last_name, username);
  }
  render() {
    return (
      <div className="sign-up-user-page">
        <h2>Sign up as a user</h2>
        <div className="sign-up-user-wrapper">
          <div className="ui text container">
            <form className="ui form">
              <Name ref={ref => this.name = ref} />
              <Password />
              <button
                onClick={e => (e.preventDefault(), this.handleSubmit())}>
                  Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
