import { Meteor } from 'meteor/meteor';
import { Reviews } from './reviews';

Meteor.publish('getAllReviews', () => Reviews.find({}));
