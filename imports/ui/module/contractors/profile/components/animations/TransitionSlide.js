import React, { Component } from 'react';
import { Motion, TransitionMotion, spring } from 'react-motion';

export class TransitionSlide extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleMouseDown() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  }

  willEnter() {
    opacity: 0;
    animation: slideIn 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  render() {
    return (
      <TransitionMotion
        willLeave={this.willLeave}
        willEnter={this.willEnter}
      >
        {this.props.children}
      </TransitionMotion>
    );
  }
}
