import React, { Component } from 'react';
import { Icon, Rating } from 'semantic-react';

export class InputRating extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.handleRating = this.handleRating.bind(this);
  }

  handleRating(e) {
    this.setState({
      value: e.target.value,
    });
    this.star.state.value = this.state.value;
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (
      <div className="rating-container">
        <Rating star max="5" size="massive" ref={ref => this.star = ref} initialValue="0" />
        <br />
        <div>
          <input
            type="range"
            onChange={this.handleRating}
            value={this.state.value}
            min="0"
            max="5"
            step="1"
          />
          <br />
          {this.state.value}
        </div>
      </div>
    );
  }
}
