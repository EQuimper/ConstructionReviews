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
    const { user, contractors } = this.props;
    if (!user) return <LoadingPage />;
    return (
      <div>
        <SideMenu
          bookmark={contractors.length}
          tabActive={this.state.tabActive}
          handleTabActive={(tab) => this.handleTabActive(tab)}
        />
        <div className="ui centered grid">
          <h1>Welcome {user.username}</h1>
          <br />
          {this.state.tabActive === 1 ? (
            <div>
              {contractors.map(contractor => (
                <li>{contractor.name}</li>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}


UserProfile.propTypes = {
  user: PropTypes.object,
  contractors: PropTypes.array
};
