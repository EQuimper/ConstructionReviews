import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

const styles = {
  menu: {
    marginTop: 42
  }
};

export const SideMenu = ({ bookmark, handleTabActive, tabActive }) => {
  const handleClickSideMenu = num => {
    handleTabActive(num);
  };
  return (
    <div className="ui vertical menu left fixed" style={styles.menu}>
      <div className="item">
        <div className="ui transparent icon input">
          <input type="text" placeholder="Search..." data-cip-id="cIPJQ342845643" />
          <i className="search icon" />
        </div>
      </div>
      <a
        className={(tabActive === 1 ? 'teal item active' : 'teal item')}
        onClick={() => handleClickSideMenu(1)}
      >
        My Bookmarked
        <div className="ui teal left pointing label">{bookmark}</div>
      </a>
      <a
        className={(tabActive === 2 ? 'item active' : 'item')}
        onClick={() => handleClickSideMenu(2)}
      >
        My Jobs Posting
        <div className="ui label">51</div>
      </a>
      <a
        className={(tabActive === 3 ? 'item active red inverted' : 'item')}
        onClick={() => handleClickSideMenu(3)}
      >
        My Messages
        <div className="ui label red inverted">1</div>
      </a>
    </div>
  );
};


SideMenu.propTypes = {
  bookmark: PropTypes.number
};
