import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reviewActions from '../../../../../actions/contractors/reviewActions';
import { Icon } from 'semantic-react';

const ReviewFeed = ({ reviews, reviewsContractor, actions }) => {
  handleLiked = id => {
    actions.incrementReviewLiked(id);
  }
  removeLiked = id => {
    actions.decrementReviewLiked(id);
  }
  return (
    <div className="ui feed">
      {reviews.map((review, i) => (
        <div className="event">
          <div className="label">
            <img src="http://semantic-ui.com/images/avatar/small/elliot.jpg" alt="" />
          </div>
          <div className="content">
            <div className="summary">
              Joe Henderson rate {review.rating} <Icon name="star" color="yellow" />
              <div className="date">
                3 days ago
              </div>
            </div>
            <div className="extra text">
              {review.text}
            </div>
            <div className="meta">
              {reviewsContractor.find(item => item === review._id) ?
                <a className="like" onClick={() => this.removeLiked(review._id)}>
                  <i className="like icon red inverted" /> {review.like === 0 ? 0 : review.like} Likes
                </a> :
                <a className="like" onClick={() => this.handleLiked(review._id)}>
                  <i className="like icon" /> {review.like === 0 ? 0 : review.like} Likes
                </a>
              }
            </div>
          </div>
        </div>
      ))}
      <div className="event">
        <div className="label">
          <img src="http://semantic-ui.com/images/avatar/small/justen.jpg" />
        </div>
        <div className="content">
          <div className="summary">
            <a>Justen Kitsune</a> added <a>2 new photos</a> of you
            <div className="date">
              4 days ago
            </div>
          </div>
          <div className="extra images">
            <a><img src="http://semantic-ui.com/images/wireframe/image.png" /></a>
            <a><img src="http://semantic-ui.com/images/wireframe/image.png" /></a>
          </div>
          <div className="meta">
            <a className="like">
              <i className="like icon" /> 41 Likes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ReviewFeed.propTypes = {
  reviews: PropTypes.array,
};

const mapState = state => ({ reviewsContractor: state.reviewsContractor });

const mapDispatch = dispatch => ({ actions: bindActionCreators(reviewActions, dispatch) });

export default connect(mapState, mapDispatch)(ReviewFeed);
