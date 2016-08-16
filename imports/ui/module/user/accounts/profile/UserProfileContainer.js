import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../../api/contractors/contractors';
import { UserProfile } from './UserProfile';

export default createContainer(() => {
  Meteor.subscribe('getContractorsBookmarkedFromUser');
  return {
    contractors: Contractors.find().fetch(),
    user: Meteor.user(),
  };
}, UserProfile);
