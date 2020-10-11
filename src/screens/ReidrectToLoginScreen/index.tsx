import React from 'react';
import { withRouter, Redirect, RouteComponentProps } from 'react-router';

const RedirectToLoginScreen = withRouter(({ location }: RouteComponentProps) => (
    <Redirect to={{
      pathname: '/admin_auth',
      search: `?redirect=${location.pathname}`,
    }} />
  ),
);

export default RedirectToLoginScreen;
