import { Meteor } from 'meteor/meteor';
import { BookmarkContractors } from './contractors';

Meteor.publish('getContractorsBookmarked', () => BookmarkContractors.find({}));
