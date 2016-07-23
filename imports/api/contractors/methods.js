import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.methods({
  addContractor(contractor) {
    const newContractor = Contractors.insert({
      name: contractor.name,
      city: contractor.city,
      province: contractor.province,
      slug: contractor.slug,
    });
    return newContractor;
  },
});
