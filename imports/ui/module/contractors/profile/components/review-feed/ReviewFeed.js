import React from 'react';
import { Icon } from 'semantic-react';

export const ReviewFeed = ({ reviews }) =>
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
            <a className="like">
              <i className="like icon" /> 5 Likes
            </a>
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
  </div>;
