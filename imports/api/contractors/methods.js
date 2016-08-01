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
      favorite_count: 0,
      createdAt: new Date(),
    });
    return newContractor;
  },
  incrementRecommendedCount(id) {
    check(id, String);
    Contractors.update(id, {
      $inc: {
        favorite_count: +1,
      },
    });
  },
  decrementRecommendedCount(id) {
    check(id, String);
    Contractors.update(id, {
      $inc: {
        favorite_count: -1,
      },
    });
  },
});
