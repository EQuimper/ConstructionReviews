import { Meteor } from 'meteor/meteor';

import * as types from '../../constants';

export const addContractor = contractor => {
  const promise = new Promise((resolve, reject) => {
    Meteor.call('addContractor', contractor, err => {
      if (err) reject(err);
      resolve(contractor);
    });
  });
  return {
    type: types.CREATE_CONTRACTOR,
    payload: promise,
  };
};
