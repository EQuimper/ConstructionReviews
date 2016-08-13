import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'semantic-react';

import * as reviewActions from '../../../../../actions/contractors/reviewActions';
import { Review } from '../review/Review';

const ReviewFeed = ({ reviews, reviewsContractor, actions, contractor }) => {
  handleLiked = id => {
    const userId = Meteor.userId();
    actions.incrementReviewLiked(userId, id);
  };
  removeLiked = id => {
    const userId = Meteor.userId();
    actions.decrementReviewLiked(userId, id);
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
      {reviews.map((review, i) => {
        let { users } = review;
        if (!users) {
          users = [];
        }
        return (
          <div className="event" key={i}>
            <div className="label">
              <img src="http://semantic-ui.com/images/avatar/small/elliot.jpg" alt="" />
            </div>
            <div className="content">
              <div className="summary">
                <em>
                  {review.user.username}
                </em> rate {review.rating} <Icon name="star" color="yellow" />
                <div className="date">
                  {moment(review.createdAt).fromNow()}
                </div>
              </div>
              <div className="extra text">
                {review.text}
              </div>
              <div className="meta">
                {users.find(id => id === Meteor.userId()) ?
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
        );
      })}
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
