import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../../../../../../actions/contractors/contractorFavorite';
import { Icon, MenuItem } from 'semantic-react';

class Recommended extends Component {
  handleLiked(contractor) {
    this.props.actions.addContractorFavorite(contractor);
  }

  removeLiked(contractor) {
    this.props.actions.removeContractorFavorite(contractor);
  }
  render() {
    const { contractor, favoriteContractors } = this.props;
    return (
      <div>
        {favoriteContractors.find(item => item._id === contractor._id) ?
          <MenuItem onClick={() => this.removeLiked(contractor)}>
            <Icon name="heart red" size="large" /> Unrecommended
          </MenuItem> :
          <MenuItem onClick={() => this.handleLiked(contractor)}>
            <Icon name="outline heart red" size="large" /> Recommended
          </MenuItem>
        }
      </div>
    );
  }
}

const mapState = state => ({ favoriteContractors: state.favoriteContractors });

const mapDispatch = dispatch => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(mapState, mapDispatch)(Recommended);
