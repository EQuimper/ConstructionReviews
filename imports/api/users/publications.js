import { Meteor } from 'meteor/meteor';

Meteor.publish('getUserProfile', () => Meteor.users.find({userId: this.userId}));
