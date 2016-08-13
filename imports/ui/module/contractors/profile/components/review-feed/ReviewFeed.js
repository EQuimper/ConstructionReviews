import React, { PropTypes } from 'react';
import { moment } from 'meteor/momentjs:moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'semantic-react';

import * as reviewActions from '../../../../../actions/contractors/reviewActions';
import { Review } from '../review/Review';

const ReviewFeed = ({ reviews, reviewsContractor, actions, contractor }) => {
  handleLiked = id => {
    actions.incrementReviewLiked(id);
  };
  removeLiked = id => {
    actions.decrementReviewLiked(id);
  };
  if (reviews.length === 0) {
    return (
      <div>
        <h1>No Review Yet!</h1>
        <Review contractor={contractor} />
      </div>
    );
  }
  return (
    <div className="ui feed">
      {reviews.map((review, i) => (
        <div className="event" key={i}>
          <div className="label">
            <img src="http://semantic-ui.com/images/avatar/small/elliot.jpg" alt="" />
          </div>
          <div className="content">
            <div className="summary">
              {review.user.username} rate {review.rating} <Icon name="star" color="yellow" />
              <div className="date">
                {moment(review.createdAt).fromNow()}
              </div>
            </div>
            <div className="extra text">
              {review.text}
            </div>
            <div className="meta">
              {reviewsContractor.find(item => item === review._id) ?
                <a className="like" onClick={() => this.removeLiked(review._id)}>
                  <i className="like icon red inverted" />
                  {review.like === 0 ? 0 : review.like} Likes
                </a> :
                <a className="like" onClick={() => this.handleLiked(review._id)}>
                  <i className="like icon" /> {review.like === 0 ? 0 : review.like} Likes
                </a>
              }
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

ReviewFeed.propTypes = {
  reviews: PropTypes.array,
  reviewsContractor: PropTypes.array,
  actions: PropTypes.object,
  contractor: PropTypes.object,
};

const mapState = state => ({ reviewsContractor: state.reviewsContractor });

const mapDispatch = dispatch => ({ actions: bindActionCreators(reviewActions, dispatch) });

export default connect(mapState, mapDispatch)(ReviewFeed);
