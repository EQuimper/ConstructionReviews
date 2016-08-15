import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorToBookmarks = (userId, id) => {
  Meteor.call('addContractorToBookmark', userId, id);
  return {
    type: types.ADD_CONTRACTOR_TO_BOOKMARK,
    payload: {
      userId,
      id,
    },
  };
};

export const removeContractorToBookmarks = (userId, id) => {
  Meteor.call('removeContractorToBookmark', userId, id);
  return {
    type: types.REMOVE_CONTRACTOR_TO_BOOKMARK,
    payload: {
      userId,
      id,
    },
  };
};
