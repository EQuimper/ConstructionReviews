import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { Icon } from 'semantic-react';

import { Dropdown } from './components/Dropdown';

export class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      active: 'tab1',
    };
  }
  handleClick(tab) {
    this.setState({
      active: tab,
    });
  }
  render() {
    return (
      <div className="ui pointing menu">
        <Link
          to="/"
          onClick={() => this.handleClick('tab1')}
          className={(this.state.active === 'tab1') ? 'active item' : 'item'}
        >
          Home
        </Link>
        <Link
          to="/contractors"
          onClick={() => this.handleClick('tab2')}
          className={(this.state.active === 'tab2') ? 'active item' : 'item'}
        >
          Contractors
        </Link>
        <Link
          to="/contractors/new"
          onClick={() => this.handleClick('tab3')}
          className={(this.state.active === 'tab3') ? 'active item' : 'item'}
        >
          New Contractor
        </Link>
        <div className="right menu">
          <div className="item">
            <Icon name="alarm outline" fitted />
          </div>
          {Meteor.userId() ?
            <Dropdown /> :
            <Link to="/user/login" className="item">
              Sign Up | Log In
            </Link>
          }
        </div>
      </div>
    );
  }
}
