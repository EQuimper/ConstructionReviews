import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorToBookmarks = id => {
  Meteor.call('addContractorToBookmark', id);
  return {
    type: types.ADD_CONTRACTOR_TO_BOOKMARK,
    payload: id,
  };
};

export const removeContractorToBookmarks = id => {
  Meteor.call('removeContractorToBookmark', id);
  return {
    type: types.REMOVE_CONTRACTOR_TO_BOOKMARK,
    payload: id,
  };
};
