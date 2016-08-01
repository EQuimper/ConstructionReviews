import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ReviewFeed from './ReviewFeed';
import { Reviews } from '../../../../../../api/reviews/reviews';

export default createContainer(({ contractor }) => {
  Meteor.subscribe('getContractorReviews', contractor);
  return {
    reviews: Reviews.find({}, {
      sort: {
        createdAt: -1,
      },
    }).fetch(),
  };
}, ReviewFeed);
