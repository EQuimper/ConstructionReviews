import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

// Form Elements
import { Password } from './form-elements/Password';
import { Email } from './form-elements/Email';

export class Login extends Component {
  loginUser() {
    event.preventDefault();
    const password = this.passwordLogin.getValue();
    const email = this.emailLogin.getValue();

    Meteor.loginWithPassword(email, password, err => {
      if (err) Meteor.Error(500, 'User not exist');
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
              <Email ref={ref => this.emailLogin = ref} />
              <Password ref={ref => this.passwordLogin = ref} />
              <div className="ui buttons">
                <button
                  className="ui white submit button"
                  onClick={() => this.loginUser()}
                >
                  Login
                </button>
                <div className="or"></div>
                <button
                  className="ui teal button"
                  onClick={e => (e.preventDefault(), browserHistory.push('/user/sign-up'))}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
