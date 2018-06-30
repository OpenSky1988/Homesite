/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './store/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
