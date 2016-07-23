import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import { history } from '../../ui/configureStore';

import { App } from '../../ui/App';
import { WelcomePages } from '../../ui/pages/WelcomePages';
import { NoMatch } from '../../ui/pages/NoMatch';
import { NewContractor } from '../../ui/module/contractors/new/NewContractor';
import { NewReview } from '../../ui/module/reviews/new/NewReview';

// Containers
import ListContractors from '../../ui/module/contractors/list/ListContractors';
import ListReviews from '../../ui/module/reviews/list/ListReviews';
import { ContractorsProfile } from '../../ui/module/contractors/profile/ContractorsProfile';

export default (
  <Router history={history}>
    <Route path={"/"} component={App}>
      <IndexRoute component={WelcomePages} />
      <Route path={"/contractors"}>
        <IndexRoute component={ListContractors} />
        <Route path={"/contractors/profile/:name"} component={ContractorsProfile} />
        <Route path={"/contractors/new"} component={NewContractor} />
      </Route>
      <Route path={"/reviews"}>
        <IndexRoute component={ListReviews} />
        <Route path={"/reviews/new"} component={NewReview} />
      </Route>
      <Route path={"*"} component={NoMatch} />
    </Route>
  </Router>
);
