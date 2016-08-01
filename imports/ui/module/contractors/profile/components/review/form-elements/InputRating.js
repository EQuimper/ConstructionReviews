import React, { Component } from 'react';
import { Label, Rating } from 'semantic-react';

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
      value: this.star.state.hovered,
    });
  }

  getValue() {
    return this.state.value;
  }

  render() {
    const { value } = this.state;
    let msg = '';
    if (value === 0) {
      msg = 'Start Rating';
    } else if (value === 1) {
      msg = 'Poor';
    } else if (value === 2) {
      msg = 'Terrible';
    } else if (value === 3) {
      msg = 'Average';
    } else if (value === 4) {
      msg = 'Very Good';
    } else {
      msg = 'Excellent';
    }
    return (
      <div className="rating-container">
        <Rating
          type="star"
          max="5"
          size="massive"
          ref={ref => this.star = ref}
          initialValue="0"
          onChange={this.handleRating}
          value={value}
        />
        <br />
        <div>
          <Label basic pointing color="black">
            {msg}
          </Label>
        </div>
      </div>
    );
  }
}
