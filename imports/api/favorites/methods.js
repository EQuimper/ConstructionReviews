import { Meteor } from 'meteor/meteor';
import { Contractors } from '../contractors/contractors';
import { Favorites } from './favorites';
import { check } from 'meteor/check';

Meteor.methods({
  addContractorToBookmark(id) {
    check(id, String);
    const user = Meteor.users.findOne(this.userId);
    const newFavorite = Favorites.insert({
      userId: user._id,
      contractorId: id,
    });
    // Add userId to the usersBookmarked in the contractors doc
    Contractors.update(id, {
      $addToSet: {
        usersBookmarked: user._id,
      },
    });
    // Add contractors from the bookmarked array of the user
    Meteor.users.update(this.userId, {
      $addToSet: {
        'profile.contractorsBookmarked': id,
      },
    });
    return newFavorite;
  },
  removeContractorToBookmark(id) {
    check(id, String);
    const user = Meteor.users.findOne(this.userId);
    const deleteFavorite = Favorites.remove({
      userId: user._id,
      contractorId: id,
    });
    // Remove userId to the usersBookmarked in the contractors doc
    Contractors.update(id, {
      $pull: {
        usersBookmarked: user._id,
      },
    });
    // Remove contractors from the bookmarked array of the user
    Meteor.users.update(this.userId, {
      $pull: {
        'profile.contractorsBookmarked': id,
      },
    });
    return deleteFavorite;
  },
});
