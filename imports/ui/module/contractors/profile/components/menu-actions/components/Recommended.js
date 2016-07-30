import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../../../../../../actions/contractors/contractorFavorite';
import { Icon, MenuItem } from 'semantic-react';

const Recommended = ({ contractor, favoriteContractors, actions }) => {
  handleLiked = contractor => {
    actions.addContractorFavorite(contractor);
    actions.incrementRecommendedCount(contractor._id);
  };
  removeLiked = id => {
    actions.removeContractorFavorite(id);
    actions.decrementRecommendedCount(id);
  };
  return (
    <div>
      {favoriteContractors.find(item => item === contractor._id) ?
        <MenuItem onClick={() => this.removeLiked(contractor._id)}>
          <Icon name="heart red" size="large" /> Recommended
        </MenuItem> :
        <MenuItem onClick={() => this.handleLiked(contractor)}>
          <Icon name="outline heart red" size="large" /> Recommended
        </MenuItem>
      }
    </div>
  );
};

const mapState = state => ({ favoriteContractors: state.favoriteContractors });

const mapDispatch = dispatch => ({ actions: bindActionCreators(favoriteActions, dispatch) });

Recommended.propTypes = {
  contractor: PropTypes.object.isRequired,
};

export default connect(mapState, mapDispatch)(Recommended);
