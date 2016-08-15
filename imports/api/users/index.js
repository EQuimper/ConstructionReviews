import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  user.firstName = options.first_name;
  user.lastName = options.last_name;
  user.contractorsBookmarked = [];
  return user;
});
