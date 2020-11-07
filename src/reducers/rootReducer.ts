import { combineReducers } from 'redux';

import menu from './menuReducer';
import project from './projectReducer';
import article from './articleReducer';
import contactForm from './contactFormReducer';
import isAuthorized from './authReducer';

export default combineReducers({
  menu,
  project,
  article,
  contactForm,
  isAuthorized,
});
