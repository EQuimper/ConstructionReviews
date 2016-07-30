import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../../../../../../actions/contractors/contractorFavorite';
import { Icon, MenuItem } from 'semantic-react';

const Recommended = ({ contractor, favoriteContractors, actions }) => {
  handleRecommended = contractor => {
    actions.addContractorFavorite(contractor);
  };
  removeRecommended = id => {
    actions.removeContractorFavorite(id);
  };
  return (
    <div>
      {favoriteContractors.find(item => item === contractor._id) ?
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

const mapState = state => ({ favoriteContractors: state.favoriteContractors });

const mapDispatch = dispatch => ({ actions: bindActionCreators(favoriteActions, dispatch) });

Recommended.propTypes = {
  contractor: PropTypes.object.isRequired,
};

export default connect(mapState, mapDispatch)(Recommended);
