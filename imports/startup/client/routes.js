import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { history } from '../../ui/configureStore';

import { App } from '../../ui/App';
import { WelcomePage } from '../../ui/pages/WelcomePage';
import { WelcomePageNoUser } from '../../ui/pages/WelcomePageNoUser';
import { NoMatch } from '../../ui/pages/NoMatch';
import { NewContractor } from '../../ui/module/contractors/new/NewContractor';

// Containers
import ListContractorsContainer from '../../ui/module/contractors/list/ListContractorsContainer';
import ContractorProfileContainer from '../../ui/module/contractors/profile/ContractorProfileContainer';
import { UserProfile } from '../../ui/module/user/UserProfile';

export default (
  <Router history={history}>
    <Route path={"/welcome"} component={WelcomePageNoUser} />
    <Route path={"/"} component={App}>
      <IndexRoute component={WelcomePage} />
      <Route path={"/contractors"}>
        <IndexRoute component={ListContractorsContainer} />
        <Route path={"/contractors/profile/:name"} component={ContractorProfileContainer} />
        <Route path={"/contractors/new"} component={NewContractor} />
      </Route>
      <Route name="userAccount" path={"/my-account"}>
        <IndexRoute component={UserProfile} />
      </Route>
      <Route path={"*"} component={NoMatch} />
    </Route>
  </Router>
);
