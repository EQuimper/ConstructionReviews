import { Meteor } from 'meteor/meteor';
import { ContractorsFavorites } from './contractorsFavorites';

Meteor.publish('getContractorsFavorites', () => ContractorsFavorites.find({}));
