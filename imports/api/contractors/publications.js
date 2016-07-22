import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.publish('getContractors', (filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return Contractors.find({});
    default:
      return Contractors.find({});
  }
});
