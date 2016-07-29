import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.publish('getContractors', () => Contractors.find({}));

//Meteor.publish('getContractorsFavorite', () => Contractors.find({ favorite: true }).fetch());

//Meteor.publish('getContractorsNoFavorite', () => Contractors.find({ favorite: false }));
