import { Meteor } from 'meteor/meteor';
import { Favorites } from './favorites';

Meteor.publish('getContractorsBookmarkedFromUser', () => {
  return Favorites.find({userId: 'A2pYTResHvGCQikYL'});
});
