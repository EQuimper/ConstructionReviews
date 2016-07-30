import { Meteor } from 'meteor/meteor';
import * as types from '../../constants';

export const addContractorFavorite = contractor => {
  let contractorsFavorite = JSON.parse(localStorage.getItem('contractorsFavorite'));

  if (contractorsFavorite) contractorsFavorite = [...contractorsFavorite, contractor._id];
  else contractorsFavorite = [contractor._id];

  localStorage.setItem('contractorsFavorite', JSON.stringify(contractorsFavorite));

  Meteor.call('addContractorFavorites', contractor);
  Meteor.call('incrementRecommendedCount', contractor._id);
  return {
    type: types.ADD_CONTRACTOR_TO_FAVORITE,
    payload: contractor,
  };
};

export const removeContractorFavorite = id => {
  let contractorsFavorite = JSON.parse(localStorage.getItem('contractorsFavorite'));
  if (contractorsFavorite) {
    contractorsFavorite = contractorsFavorite.filter(item => item !== id);
    localStorage.setItem('contractorsFavorite', JSON.stringify(contractorsFavorite));
  }
  Meteor.call('removeContractorFavorites', id);
  Meteor.call('decrementRecommendedCount', id);
  return {
    type: types.REMOVE_CONTRACTOR_TO_FAVORITE,
    payload: id,
  };
};
