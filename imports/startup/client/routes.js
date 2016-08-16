import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { history } from '../../ui/configureStore';

import { App } from '../../ui/App';
import { WelcomePage } from '../../ui/pages/WelcomePage';
import { WelcomePageNoUser } from '../../ui/pages/WelcomePageNoUser';
import { NoMatch } from '../../ui/pages/NoMatch';
import { NewContractor } from '../../ui/module/contractors/new/NewContractor';
import { SignUp } from '../../ui/module/user/accounts/sign-up/SignUp';
import { Login } from '../../ui/module/user/accounts/login/Login';

// Containers
import ListContractorsContainer from '../../ui/module/contractors/list/ListContractorsContainer';
import ContractorProfileContainer from '../../ui/module/contractors/profile/ContractorProfileContainer';
import UserProfileContainer from '../../ui/module/user/accounts/profile/UserProfileContainer';

export default (
  <Router history={history}>
    <Route path={"/welcome"} component={WelcomePageNoUser} />
    <Route path={"/user/sign-up"} component={SignUp} />
    <Route path={"/user/login"} component={Login} />
    <Route path={"/"} component={App}>
      <IndexRoute component={WelcomePage} />
      <Route path={"/contractors"}>
        <IndexRoute component={ListContractorsContainer} />
        <Route path={"/contractors/profile/:name"} component={ContractorProfileContainer} />
        <Route path={"/contractors/new"} component={NewContractor} />
      </Route>
      <Route name="userAccount" path={"/my-account"}>
        <IndexRoute component={UserProfileContainer} />
      </Route>
      <Route path={"*"} component={NoMatch} />
    </Route>
  </Router>
);
