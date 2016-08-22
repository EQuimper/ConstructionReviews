import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Contractors } from '../../../../../api/contractors/contractors';
import { Favorites } from '../../../../../api/favorites/favorites';
import { UserProfile } from './UserProfile';

export default createContainer(() => {
  Meteor.subscribe('getContractorsBookmarkedFromUser');
  Meteor.subscribe('getBookmarkedCount');
  return {
    contractors: Contractors.find().fetch(),
    length: Favorites.find().fetch().length,
    user: Meteor.user()
  };
}, UserProfile);
