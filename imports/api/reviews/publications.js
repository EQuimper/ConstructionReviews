import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Reviews } from './reviews';

Meteor.publish('getContractorReviews', contractor => {
  check(contractor, Object);
  return Reviews.find({ company_id: contractor._id });
});
