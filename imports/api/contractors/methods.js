import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.methods({
  addContractor(contractor) {
    const newContractor = Contractors.insert({
      name: contractor.name,
      description: contractor.description,
      city: contractor.city,
      province: contractor.province,
      company_website: contractor.company_website,
      slug: contractor.slug,
      favorite_count: 0,
    });
    return newContractor;
  },
});

Meteor.methods({
  incrementRecommendedCount(id) {
    Contractors.update(id, {
      $inc: {
        favorite_count: +1,
      },
    });
  },
});

Meteor.methods({
  decrementRecommendedCount(id) {
    Contractors.update(id, {
      $inc: {
        favorite_count: -1,
      },
    });
  },
});
