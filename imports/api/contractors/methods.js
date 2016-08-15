import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Contractors } from './contractors';

Meteor.methods({
  addContractor(contractor) {
    check(contractor, Object);
    const newContractor = Contractors.insert({
      name: contractor.name,
      description: contractor.description,
      city: contractor.city,
      province: contractor.province,
      company_website: contractor.company_website,
      phone_number: contractor.phone_number,
      slug: contractor.slug,
      usersRecommended: [],
      usersBookmarked: [],
      reviews: [],
      createdAt: new Date(),
    });
    return newContractor;
  },
  addUserToRecommended(userId, id) {
    check(userId, String);
    check(id, String);
    Contractors.update(id, {
      $addToSet: {
        usersRecommended: userId,
      },
    });
  },
  removeUserToRecommended(userId, id) {
    check(userId, String);
    check(id, String);
    Contractors.update(id, {
      $pull: {
        usersRecommended: userId,
      },
    });
  },
  addContractorToBookmark(userId, id) {
    check(userId, String);
    check(id, String);
    // Add userId to the usersBookmarked in the contractors doc
    Contractors.update(id, {
      $addToSet: {
        usersBookmarked: userId,
      },
    });
    // Add contractors from the bookmarked array of the user
    Meteor.users.update(this.userId, {
      $addToSet: {
        'profile.contractorsBookmarked': id,
      },
    });
  },
  removeContractorToBookmark(userId, id) {
    check(userId, String);
    check(id, String);
    // Remove userId to the usersBookmarked in the contractors doc
    Contractors.update(id, {
      $pull: {
        usersBookmarked: userId,
      },
    });
    // Remove contractors from the bookmarked array of the user
    Meteor.users.update(this.userId, {
      $pull: {
        'profile.contractorsBookmarked': id,
      },
    });
  },
});
