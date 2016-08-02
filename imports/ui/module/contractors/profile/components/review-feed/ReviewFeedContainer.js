import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import ReviewFeed from './ReviewFeed';
import { Reviews } from '../../../../../../api/reviews/reviews';
import { MediumLoading } from '../../../../../layouts/MediumLoading';

const composer = ({ contractor }, onData) => {
  if (Meteor.subscribe('getContractorReviews', contractor).ready()) {
    const reviews = Reviews.find({}, { sort: { createdAt: -1 } }).fetch();
    onData(null, { reviews });
  }
};

export default composeWithTracker(composer, MediumLoading)(ReviewFeed);
