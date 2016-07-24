import { ContractorProfile } from './ContractorProfile';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../api/contractors/contractors';

export default createContainer(({ routeParams }) => {
  Meteor.subscribe('getContractors');
  return {
    contractor: Contractors.find({
      name: routeParams.name,
    }).fetch(),
  };
}, ContractorProfile);
