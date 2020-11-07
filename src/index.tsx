/* global document */

import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// import registerServiceWorker from './registerServiceWorker';
import App from './App';
import store from './store/store';
import './index.less';

render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
// registerServiceWorker();
