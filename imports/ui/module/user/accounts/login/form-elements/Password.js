import React, { Component } from 'react';

export class Password extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
    };
  }
  render() {
    return (
      <div className="field">
        <label>Password</label>
      </div>
    );
  }
}
