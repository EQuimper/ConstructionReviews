import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contractors } from './contractors';

Meteor.publish('getContractors', () => Contractors.find({}));

Meteor.publish('getContractor', params => {
  check(params, Object);
  return Contractors.find({ name: params.name });
});
