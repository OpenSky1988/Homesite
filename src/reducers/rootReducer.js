import { combineReducers } from 'redux';

import menu from './menuReducer';
import project from './projectReducer';
import article from './articleReducer';
import articles from './articlesReducer';

export default combineReducers ({
  menu,
  project,
  article,
  articles,
});