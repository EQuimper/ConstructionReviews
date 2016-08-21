import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';

export const BookMarkList = ({ contractor }) => {
  const handleRemoveBookmark = id => Meteor.call('removeContractorToBookmark', id);
  return (
    <div className="item">
      <div className="ui tiny image">
        <img src="http://semantic-ui.com/images/wireframe/image.png" alt={contractor.name} />
      </div>
      <div
        className="content"
        onClick={() => browserHistory.push(`/contractors/profile/${contractor.name}`)}
      >
        <div className="header">{contractor.name}</div>
        <div className="meta">
          <span>$1200</span>
          <span>1 Month</span>
        </div>
        <div className="description">
          <p></p>
        </div>
      </div>
      <div className="extra">
        <div
          onClick={() => handleRemoveBookmark(contractor._id)}
          className="circular ui right floated vertical animated button red inverted"
        >
          <div className="visible content">
            <i className="trash outline icon" />
          </div>
          <div className="hidden content">
            <i className="trash icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

BookMarkList.propTypes = {
  contractor: PropTypes.object
};
