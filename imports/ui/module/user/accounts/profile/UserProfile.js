import React, { Component, PropTypes } from 'react';

import { LoadingPage } from '../../../../layouts/LoadingPage';
import { SideMenu } from './SideMenu';
import { BookMarkList } from './bookmark/BookMarkList';

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

  handleUpdateChild() {
    React.forceUpdate();
  }

  render() {
    const { user, contractors } = this.props;
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
            {this.state.tabActive === 1 ? (
              <div>
                <h2 style={{ textAlign: 'center' }}>My Bookmarked</h2>
                <div className="ui link items divided">
                  {contractors.map((contractor, i) => (
                    <BookMarkList key={i} contractor={contractor} />
                  ))}
                </div>
              </div>
            ) : <h1>Welcome {user.username}</h1>}
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
