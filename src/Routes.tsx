import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { RouteWithLayout } from './components';
import Main from './layouts/Main/Main';
import Minimal from './layouts/Minimal/Minimal';
import { MainPage } from './pages/MainPage';
import { MinimalPage } from './pages/MinimalPage';
import { NotMadeYet } from './pages/NotMadeYet';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={MinimalPage} exact layout={Minimal} layoutprops={{}} path={['/']} />

      <RouteWithLayout component={MainPage} exact layout={Main} path={['/main', '/main/:pageName']} />
      <RouteWithLayout component={NotMadeYet} exact layout={Main} path={['/notmadeyet', '/notmadeyet/:pageName']} />

      <RouteWithLayout component={NotMadeYet} exact layout={Minimal} layoutprops={{}} path="/404-not-found" />
      <Redirect
        to={{
          pathname: '/404-not-found',
          search: '?from=' + encodeURIComponent(window.location.href),
          state: { from: window.location.href },
        }}
      />
    </Switch>
  );
};

export default Routes;
