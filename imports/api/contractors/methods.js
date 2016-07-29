import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.methods({
  addContractor(contractor) {
    const newContractor = Contractors.insert({
      name: contractor.name,
      description: contractor.description,
      city: contractor.city,
      province: contractor.province,
      slug: contractor.slug,
    });
    return newContractor;
  },
});

//Meteor.methods({
//  addContractorFavorites(id) {
//    Contractors.update(id, {
//      $set: {
//        favorite: true,
//      },
//    });
//  },
//});
//
//Meteor.methods({
//  removeContractorFavorites(id) {
//    Contractors.update(id, {
//      $set: {
//        favorite: false,
//      },
//    });
//  },
//});
