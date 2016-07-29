import { Meteor } from 'meteor/meteor';
import { ContractorsFavorites } from './contractorsFavorites';

Meteor.methods({
  addContractorFavorites(contractor) {
    const newContractorFavorite = ContractorsFavorites.insert({
      _id: contractor._id,
      name: contractor.name,
      description: contractor.description,
      city: contractor.city,
      province: contractor.province,
      slug: contractor.slug,
    });
    return newContractorFavorite;
  },
});

Meteor.methods({
  removeContractorFavorites(id) {
    ContractorsFavorites.remove({
      _id: id,
    });
    return ContractorsFavorites;
  },
});
