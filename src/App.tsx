/* global document */
/* global window */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.less';

/* Static Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Hello404 from './components/Hello404/Hello404';

const App = () => (
  <div className="App">
    <div>
      <Header />
      <Switch>
        <Route
          exact={true} path="/"
          component={Main}
        />
        <Route
          path="/blog"
          component={Blog}
        />
        <Route
          component={Hello404}
        />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
