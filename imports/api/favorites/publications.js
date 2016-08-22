import { Meteor } from 'meteor/meteor';
import { Favorites } from './favorites';
import { Contractors } from '../contractors/contractors';

Meteor.publish('getContractorsBookmarkedFromUser', function() {
  const favorites = Favorites.find({ userId: this.userId });
  const favIds = favorites.map(item => item.contractorId);
  const data = Contractors.find({ _id: { $in: favIds } });
  if (data) return data;
  return this.ready();
});

Meteor.publish('getBookmarkedCount', function() {
  const favorites = Favorites.find({ userId: this.userId });
  if (favorites) return favorites;
  return this.ready();
});
