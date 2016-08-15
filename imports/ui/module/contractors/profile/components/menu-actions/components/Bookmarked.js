import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActions from '../../../../../../actions/contractors/bookmarkActions';
import { Icon, MenuItem } from 'semantic-react';

const Bookmarked = ({ contractor, actions }) => {
  handleBookmark = id => {
    const userId = Meteor.userId();
    actions.addContractorToBookmarks(userId, id);
  };
  removeBookmark = id => {
    const userId = Meteor.userId();
    actions.removeContractorToBookmarks(userId, id);
  };
  const { usersBookmarked } = contractor;
  return (
    <div>
      {usersBookmarked.find(id => id === Meteor.userId()) ?
        <MenuItem onClick={() => this.removeBookmark(contractor._id)}>
          <Icon name="bookmark green" size="large" /> Bookmark
        </MenuItem> :
        <MenuItem onClick={() => this.handleBookmark(contractor._id)}>
          <Icon name="outline bookmark green" size="large" /> Bookmark
        </MenuItem>
      }
    </div>
  );
};

Bookmarked.propTypes = {
  contractor: PropTypes.object,
  actions: PropTypes.object,
};

const mapDispatch = dispatch => ({ actions: bindActionCreators(bookmarkActions, dispatch) });

export default connect(null, mapDispatch)(Bookmarked);
