/* global document */
/* global window */

import React, { ComponentClass } from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps, RouteProps, Switch } from 'react-router-dom';

import './App.less';

/* Static Components */
import AuthLayout from './layouts/AuthLayout';
import ErrorBoundary from './components/ErrorBoundary';
import BlogScreen from './screens/BlogScreen';
import MainLayout from './layouts/MainLayout';
import MainScreen from './screens/MainScreen';
import RedirectToLoginScreen from './screens/ReidrectToLoginScreen';
import Hello404 from './components/Hello404/Hello404';
import { IState } from './reducers/initialState';

interface IAppProps {
  isAuthorized: boolean;
}

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route {...rest} render={AuthWraper(Component)} />
);

const MainRoute = ({ component: Component, ...rest }: RouteProps) => (
  <Route {...rest} render={MainWraper(Component)} />
);

const AuthWraper = (Component: React.ComponentType<any>) => (props: any) => (
  <ErrorBoundary>
    <AuthLayout>
      <Component {...props} />
    </AuthLayout>
  </ErrorBoundary>
);

const MainWraper = (Component: React.ComponentType<any>) => (props: any) => (
  <ErrorBoundary>
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  </ErrorBoundary>
);

const App: React.FC<IAppProps> = ({ isAuthorized }) => {
  const checkAuth = (component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>) => {
    if (!isAuthorized) {
      return RedirectToLoginScreen;
    }

    return component;
  };

  return (
    <div className="App">
      <Switch>
        <MainRoute path="/" exact={true} component={MainScreen} />
        <MainRoute path="/blog" component={BlogScreen} />
        {/* <AuthRoute path="/admin_auth" exact={true} component={AuthScreen} />
        <AuthRoute path="/admin" exact={true} component={checkAuth(AdminScreen)} /> */}
        <MainRoute component={Hello404} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: IState) => ({
  isAuthorized: state.isAuthorized,
});

export default connect(mapStateToProps)(App);
