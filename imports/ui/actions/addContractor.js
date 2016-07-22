import { Meteor } from 'meteor/meteor';

export const addContractor = (name, city, province) => {
  return () => {
    Meteor.call('addContractor', { name, city, province });
  };
};

