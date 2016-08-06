import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { browserHistory } from 'react-router';

// Form Elements
import { Name } from './form-elements/Name';
import { Password } from './form-elements/Password';

export class SignUp extends Component {
  registerUser() {
    event.preventDefault();
    const name = this.name.getValue();
    const password = this.password.getValue();
    const { first_name, last_name, username } = name;

    Accounts.createUser({
      first_name,
      last_name,
      username,
      password,
    }, err => {
      if (err) {
        throw new Meteor.Error(500, err);
      }
      browserHistory.push('/my-account');
    });
  }
  render() {
    return (
      <div className="sign-up-user-page">
        <h2>Sign up as a user</h2>
        <div className="sign-up-user-wrapper">
          <div className="ui text container">
            <form className="ui form">
              <Name ref={ref => this.name = ref} />
              <Password ref={ref => this.password = ref} />
              <button
                onClick={
                  e => (e.preventDefault(), this.registerUser())
                }
              >
                  Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
