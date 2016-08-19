import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import { Rating } from 'semantic-react';

import { Review } from '../review/Review';

const ReviewFeed = ({ reviews, contractor }) => {
  handleLiked = id => {
    Meteor.call('incrementReviewLike', id);
    Meteor.call('removeReviewDisLike', id);
  };
  removeLiked = id => {
    Meteor.call('decrementReviewLike', id);
  };
  addDisLike = id => {
    Meteor.call('addReviewDisLike', id);
    Meteor.call('decrementReviewLike', id);
  };
  removeDisLike = id => {
    Meteor.call('removeReviewDisLike', id);
  };
  handleRemove = review => {
    Meteor.call('deleteReview', contractor, review);
  };
  const showLiked = num => {
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
  const showDisLiked = num => {
    let total = '';
    if (num === 0) {
      total = '0 Dislike';
    } else if (num === 1) {
      total = '1 Dislike';
    } else {
      total = `${num} Dislikes`;
    }
    return total;
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
    <div className="ui large feed">
      {reviews.map((review, i) => {
        const { usersLiked, usersDisLiked } = review;
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
              {Meteor.userId() === review.user.userId ? (
                <div>
                  <div className="meta icon-happy">
                    <i className="thumbs up icon large inverted ui disabled" />
                    {showLiked(usersLiked.length)}
                  </div>
                  <div className="meta icon-happy">
                    <i className="thumbs down icon large inverted ui disabled" />
                    {showLiked(usersDisLiked.length)}
                  </div>
                  <div className="meta icon-happy">
                    <a onClick={() => this.handleRemove(review)}>
                      <i className="close link icon large orange inverted" />Delete
                    </a>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="meta icon-happy">
                    {usersLiked.find(id => id === Meteor.userId()) ?
                      <a onClick={() => this.removeLiked(review._id)}>
                        <i className="thumbs up icon large blue inverted" />
                        {showLiked(usersLiked.length)}
                      </a> :
                      <a onClick={() => this.handleLiked(review._id)}>
                        <i className="thumbs outline up large icon" />
                        {showLiked(usersLiked.length)}
                      </a>
                    }
                  </div>
                  <div className="meta icon-happy">
                    {usersDisLiked.find(id => id === Meteor.userId()) ?
                      <a onClick={() => this.removeDisLike(review._id)}>
                        <i className="icon thumbs down large red inverted" />
                        {showDisLiked(usersDisLiked.length)}
                      </a> :
                      <a onClick={() => this.addDisLike(review._id)}>
                        <i className="icon thumbs outline down large" />
                        {showDisLiked(usersDisLiked.length)}
                      </a>
                    }
                  </div>
                </div>
              )}
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

export default ReviewFeed;
