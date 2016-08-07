import React, { Component } from 'react';

export class Email extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
    this.emailChange = this.emailChange.bind(this);
  }

  getValue() {
    return this.state.email;
  }

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="field required">
        <label>Email</label>
        <div className="field required">
          <div className="ui left icon input">
            <input
              onChange={this.emailChange}
              type="text"
              placeholder="Email"
            />
            <i className="icon mail" />
          </div>
        </div>
      </div>
    );
  }
}
