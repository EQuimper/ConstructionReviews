import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as favoriteActions from '../../../../../../actions/contractors/addContractorFavorite';
import { Icon, MenuItem } from 'semantic-react';

class Recommended extends Component {
  constructor() {
    super();

    this.state = {
      favorites: false,
    };
  }

  handleLiked(contractor) {
    this.setState({
      favorites: !this.state.favorites,
    });

    console.dir(contractor);
    this.props.actions.addContractorFavorite(contractor);
  }

  render() {
    return (
      <MenuItem onClick={() => this.handleLiked(this.props.contractor)}>
        {this.state.favorites
          ? <Icon name="heart red" size="large" />
          : <Icon name="outline heart red" size="large" />
        } Recommended
      </MenuItem>
    );
  }
}

//const mapState = state => ({ favorites: state.favorites });

const mapDispatch = dispatch => ({ actions: bindActionCreators(favoriteActions, dispatch) });

export default connect(null, mapDispatch)(Recommended);
