import React, { Component, PropTypes } from 'react';
// import { Meteor } from 'meteor/meteor';
import { LoadingPage } from '../../../../layouts/LoadingPage';
import { SideMenu } from './SideMenu';
import { BookMarkList } from './bookmark/BookMarkList';

export class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabActive: null
    };
  }

  handleTabActive(tab) {
    this.setState({
      tabActive: tab
    });
  }

  render() {
    const handleRenderTab = () => {
      const { tabActive } = this.state;
      if (tabActive === 1) {
        return (
          <BookMarkList
            contractors={this.props.contractors}
            ref={ref => this.BookMarkList = ref}
          />
        );
      } else {
        return <h1>Welcome {this.props.user.username}</h1>;
      }
    };
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
            {handleRenderTab()}
          </div>
        </div>
      </div>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.object,
  contractors: PropTypes.array,
  children: PropTypes.elem
};
