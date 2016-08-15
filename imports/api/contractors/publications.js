import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contractors } from './contractors';

Meteor.publish('getContractors', () => Contractors.find({}));

Meteor.publish('getContractor', params => {
  check(params, Object);
  return Contractors.find({ name: params.name });
});

Meteor.publish('getContractorById', () => {
  const user = Meteor.users.findOne(this.userId);
  const contIds = user.profile.contractorsBookmarked.map(id => id);
  return Contractors.find({_id: {$in: contIds}});
});
