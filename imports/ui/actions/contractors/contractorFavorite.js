import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorFavorite = (userId, contractor) => {
  Meteor.call('addUserToRecommended', userId, contractor._id);
  return {
    type: types.ADD_CONTRACTOR_TO_FAVORITE,
    payload: {
      userId,
      contractor,
    },
  };
};

export const removeContractorFavorite = (userId, id) => {
  Meteor.call('removeUserToRecommended', userId, id);
  return {
    type: types.REMOVE_CONTRACTOR_TO_FAVORITE,
    payload: {
      userId,
      id,
    },
  };
};
