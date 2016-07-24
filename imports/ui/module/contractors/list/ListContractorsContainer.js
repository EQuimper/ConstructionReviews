import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../api/contractors/contractors';
import { ListContractors } from './ListContractors';

export default createContainer(() => {
  Meteor.subscribe('getContractors');
  return {
    contractors: Contractors.find({}).fetch(),
  };
}, ListContractors);
