import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory } from 'react-router';

export const ListContractors = ({ contractors }) =>
  <div className="ui container">
    <ReactCSSTransitionGroup
      component="div"
      className="ui three column grid"
      transitionName="reviewsLoad"
      transitionEnterTimeout={600}
      transitionLeaveTimeout={400}
    >
      {contractors.map((contractor, i) => {
        const { name, usersRecommended, city, province, reviews } = contractor;
        const avgRating = arr => {
          let avg = 0;
          const sum = arr.reduce((a, b) => a + b.rating, 0);
          const total = arr.length;
          avg = sum / total;
          return Math.round(avg);
        };
        return (
          <div className="column" key={i}>
            <div className="cardProfile-wrapper">
              <div
                className="cardProfile"
                onClick={() => browserHistory.push(`/contractors/profile/${name}`)}
              >
                <div className="ui fluid card">
                  <div className="content" style={{ textAlign: 'center' }}>
                    <div className="right floated meta">
                      {usersRecommended.length} <i className="icon heart red inverted" />
                    </div>
                    <img
                      className="ui small image" src="http://brandongaille.com/wp-content/uploads/2013/07/Dlugos-Construction-Company-Logo.jpg" alt=""
                    />
                    <h3>{name}</h3>
                  </div>
                  <div className="extra content">
                    <div className="ui teal label">Roofing</div>
                    <div className="ui teal label">Sidding</div>
                    <div className="ui teal label">Painting</div>
                  </div>
                  <div className="extra content">
                    <i className="icon marker" />{city} | {province}
                    <div className="right floated">
                      {reviews.length === 0 ?
                        0 :
                        avgRating(reviews)
                      } <i className="icon star yellow"/>
                    </div>
                    <div className="right floated">
                      {reviews.length} <i className="icon comments" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </ReactCSSTransitionGroup>
  </div>;

ListContractors.propTypes = {
  contractors: PropTypes.array,
};
