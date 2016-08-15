import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  user.profile = {
    firstName: options.profile.first_name,
    lastName: options.profile.last_name,
    contractorsBookmarked: [],
  };
  return user;
});
