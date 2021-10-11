import { Route, Switch, Redirect } from 'react-router-dom';
import React, { lazy } from 'react';

const Applications = lazy(() =>
  import(
    /* webpackChunkName: "ApplicationsPage" */ './SmartComponents/Applications/Applications'
  )
);

const EdgeSettings = lazy(() =>
  import(
    /* webpackChunkName: "ApplicationsPage" */ './PresentationalComponents/edge/EdgeSettings'
  )
);

const paths = {
  applications: '/applications/:id',
  edge: '/applications/edge',
};

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.edge} component={EdgeSettings} />
      <Route exact path={paths.applications} component={Applications} />
      <Route render={() => <Redirect to="/applications/insights" />} />
    </Switch>
  );
};
