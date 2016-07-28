import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorFavorite = (contractor) => {
  Meteor.call('addContractorFavorites', contractor);
  return {
    type: types.ADD_CONTRACTOR_TO_FAVORITE,
    payload: contractor,
  };
};
