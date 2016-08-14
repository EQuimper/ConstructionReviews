import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../../../../../../actions/contractors/contractorFavorite';
import { Icon, MenuItem } from 'semantic-react';

const Recommended = ({ contractor, actions }) => {
  handleRecommended = contractor => {
    const userId = Meteor.userId();
    actions.addContractorFavorite(userId, contractor);
  };
  removeRecommended = id => {
    const userId = Meteor.userId();
    actions.removeContractorFavorite(userId, id);
  };
  const { usersRecommended } = contractor;
  return (
    <div>
      {usersRecommended.find(id => id === Meteor.userId()) ?
        <MenuItem onClick={() => this.removeRecommended(contractor._id)}>
          <Icon inverted name="heart red" size="large" /> Recommended
        </MenuItem> :
        <MenuItem onClick={() => this.handleRecommended(contractor)}>
          <Icon inverted name="outline heart red" size="large" /> Recommended
        </MenuItem>
      }
    </div>
  );
};

const mapDispatch = dispatch => ({ actions: bindActionCreators(favoriteActions, dispatch) });

Recommended.propTypes = {
  contractor: PropTypes.object,
  usersRecommended: PropTypes.array,
  actions: PropTypes.object,
};

export default connect(null, mapDispatch)(Recommended);
