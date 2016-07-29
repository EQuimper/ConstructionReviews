import React, { Component } from 'react';
import { Icon, Icons, MenuItem, Popup } from 'semantic-react';

export default class Shared extends Component {
  constructor() {
    super();
    this.state = {
      popupActive: false,
    };
  }

  onButtonHoverEnter() {
    this.setState({
      popupActive: true,
    });
  }

  onPopupRequestClose() {
    this.setState({ popupActive: false });
  }

  render() {
    const styles = {
      fbColor: {
        color: '#3B5998',
      },
      twColor: {
        color: '#4099FF',
      },
      goColor: {
        color: '#dd4b39',
      },
    };
    return (
      <div onMouseEnter={() => this.onButtonHoverEnter()} ref="menu">
        <MenuItem>
          <Icon name="share" size="large" /> Share
        </MenuItem>
        <Popup
          flowing
          size="large"
          active={this.state.popupActive}
          target={this.refs.menu}
          onRequestClose={() => this.onPopupRequestClose()}
        >
          <div>
            <Icons>
              <Icon name="facebook square" size="big" style={styles.fbColor} link />
            </Icons>
            <Icons>
              <Icon name="twitter square" size="big" style={styles.twColor} link />
            </Icons>
            <Icons>
              <Icon name="google plus square" size="big" style={styles.goColor} link />
            </Icons>
            <Icons>
              <Icon name="mail" size="big" link />
            </Icons>
          </div>
        </Popup>
      </div>
    );
  }
}

