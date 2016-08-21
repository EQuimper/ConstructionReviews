import React, { Component, PropTypes } from 'react';

import { LoadingPage } from '../../../../layouts/LoadingPage';
import { SideMenu } from './SideMenu';

export class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      tabActive: null,
    };
  }

  handleTabActive(tab) {
    this.setState({
      tabActive: tab
    });
  }
  render() {
    const { user, contractors, children } = this.props;
    if (!user) return <LoadingPage />;
    return (
      <div className="ui grid">
        <div className="four column row">
          <div className="four wide column">
            <SideMenu
              bookmark={contractors.length}
              tabActive={this.state.tabActive}
              handleTabActive={tab => this.handleTabActive(tab)}
            />
          </div>
          <div className="ten wide column">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  contractors: PropTypes.array
};
