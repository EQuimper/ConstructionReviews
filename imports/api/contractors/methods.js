import { Meteor } from 'meteor/meteor';
import { Contractors } from './contractors';

Meteor.method({
  addContractor(name, city, province) {
    const contractor = new Contractors({
      name,
      city,
      province,
    });
    return contractor;
  },
});
