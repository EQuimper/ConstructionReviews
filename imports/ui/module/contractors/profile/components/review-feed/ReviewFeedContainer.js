import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { ReviewFeed } from './ReviewFeed';
import { Reviews } from '../../../../../../api/reviews/reviews';

export default createContainer(({ contractor }) => {
  Meteor.subscribe('getAllReviews');
  return {
    reviews: Reviews.find({
      company_id: contractor._id,
    }).fetch(),
  };
}, ReviewFeed);
