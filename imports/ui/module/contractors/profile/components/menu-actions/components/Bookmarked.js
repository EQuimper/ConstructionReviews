import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookmarkActions from '../../../../../../actions/contractors/bookmarkActions';
import { Icon, MenuItem } from 'semantic-react';

const Bookmarked = ({ contractor, bookmarkContractors, actions }) => {
  handleBookmark = contractor => {
    actions.addContractorToBookmarks(contractor);
  };
  removeBookmark = id => {
    actions.removeContractorToBookmarks(id);
  };
  return (
    <div>
      {bookmarkContractors.find(item => item === contractor._id) ?
        <MenuItem onClick={() => this.removeBookmark(contractor._id)}>
          <Icon name="bookmark green" size="large" /> Bookmark
        </MenuItem> :
        <MenuItem onClick={() => this.handleBookmark(contractor)}>
          <Icon name="outline bookmark green" size="large" /> Bookmark
        </MenuItem>
      }
    </div>
  );
};

const mapState = state => ({ bookmarkContractors: state.bookmarkContractors });

const mapDispatch = dispatch => ({ actions: bindActionCreators(bookmarkActions, dispatch) });

export default connect(mapState, mapDispatch)(Bookmarked);
