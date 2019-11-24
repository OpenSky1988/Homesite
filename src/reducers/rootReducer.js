import { combineReducers } from 'redux';

import menu from './menuReducer';
import project from './projectReducer';
import article from './articleReducer';
import articles from './articlesReducer';
import contactForm from './contactFormReducer';
import error from './errorReducer';

export default combineReducers ({
  menu,
  project,
  article,
  articles,
  contactForm,
  error,
});