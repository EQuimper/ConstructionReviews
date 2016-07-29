import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorToBookmarks = contractor => {
  let contractorsBookmark = JSON.parse(localStorage.getItem('contractorsBookmark'));

  if (contractorsBookmark) contractorsBookmark = [...contractorsBookmark, contractor._id];
  else contractorsBookmark = [contractor._id];

  localStorage.setItem('contractorsBookmark', JSON.stringify(contractorsBookmark));

  Meteor.call('addContractorToBookmark', contractor);
  return {
    type: types.ADD_CONTRACTOR_TO_BOOKMARK,
    payload: contractor,
  };
};

export const removeContractorToBookmarks = id => {
  let contractorsBookmark = JSON.parse(localStorage.getItem('contractorsBookmark'));
  if (contractorsBookmark) {
    contractorsBookmark = contractorsBookmark.filter(item => item !== id);
    localStorage.setItem('contractorsFavorite', JSON.stringify(contractorsBookmark));
  }
  Meteor.call('removeContractorToBookmark', id);
  return {
    type: types.REMOVE_CONTRACTOR_TO_BOOKMARK,
    payload: id,
  };
};
