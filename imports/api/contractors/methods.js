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
      slug: contractor.slug,
      favorite_count: 0,
      createdAt: new Date(),
    });
    return newContractor;
  },
});

Meteor.methods({
  incrementRecommendedCount(id) {
    check(id, String);
    Contractors.update(id, {
      $inc: {
        favorite_count: +1,
      },
    });
  },
});

Meteor.methods({
  decrementRecommendedCount(id) {
    check(id, String);
    Contractors.update(id, {
      $inc: {
        favorite_count: -1,
      },
    });
  },
});
