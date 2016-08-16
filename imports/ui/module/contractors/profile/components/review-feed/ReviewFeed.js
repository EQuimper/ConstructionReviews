import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Rating } from 'semantic-react';

import * as reviewActions from '../../../../../actions/contractors/reviewActions';
import { Review } from '../review/Review';

const ReviewFeed = ({ reviews, actions, contractor }) => {
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
  handleRemove = review => {
    Meteor.call('deleteReview', contractor, review);
  };
  const showReview = num => {
    let total = '';
    if (num === 0) {
      total = '0 Like';
    } else if (num === 1) {
      total = '1 Like';
    } else {
      total = `${num} Likes`;
    }
    return total;
  };
  return (
    <div className="ui large feed">
      {reviews.map((review, i) => {
        const { usersLiked } = review;
        return (
          <div className="event" key={i}>
            <div className="label">
              <img src="http://semantic-ui.com/images/avatar/small/elliot.jpg" alt="" />
            </div>
            <div className="content">
              <div className="summary">
                <em>
                  {review.user.username}
                </em>&nbsp;
                <Rating
                  type="star"
                  value={review.rating}
                  max={review.rating}
                />
                <div className="date">
                  {moment(review.createdAt).fromNow()}
                </div>
              </div>
              <div className="extra text">
                {review.text}
              </div>
              <div className="meta icon-happy">
                {usersLiked.find(id => id === Meteor.userId()) ?
                  <a className="like" onClick={() => this.removeLiked(review._id)}>
                    <i className="thumbs up icon large red inverted" />
                    {showReview(review.like)}
                  </a> :
                  <a className="like" onClick={() => this.handleLiked(review._id)}>
                    <i className="thumbs outline up large icon" />
                    {showReview(review.like)}
                  </a>
                }
              </div>
              <div className="meta icon-happy">
                <a href="">
                  <i className="icon thumbs outline down large" />
                  333 Dislikes
                </a>
              </div>
              <div className="meta icon-happy">
                {Meteor.userId() === review.user.userId ?
                  <a onClick={() => this.handleRemove(review)}>
                    <i className="close link icon large" />Delete
                  </a> :
                  null
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

const mapDispatch = dispatch => ({ actions: bindActionCreators(reviewActions, dispatch) });

export default connect(null, mapDispatch)(ReviewFeed);
