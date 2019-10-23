import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import initialState from '../reducers/initialState';
import rootReducer from '../reducers/rootReducer';

/* const consoleMessages = store => next => action => {
  let result;
  console.groupCollapsed(`Dispatching action => ${action.type}`);
  result = next(action);
  console.log(`${JSON.stringify(
    store.getState()
  )}`)

  console.groupEnd();

  return result;
} */
// ^^^^^ 
// Made this one for the excersise's sake. 
// You may ucncomment it and add the function's name to 
// middleware array to check how it works.

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;