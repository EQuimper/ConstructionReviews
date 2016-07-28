import { Meteor } from 'meteor/meteor';
import { ContractorsFavorites } from './contractorsFavorites';

Meteor.methods({
  addContractorFavorites(contractor) {
    const newContractorFavorite = ContractorsFavorites.insert({
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
  removeContractorFavorites(contractor) {
    ContractorsFavorites.remove({
      _id: contractor._id,
    });
    return ContractorsFavorites;
  },
});
