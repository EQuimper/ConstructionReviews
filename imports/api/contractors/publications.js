import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.publish('getContractors', () => Contractors.find({}));
