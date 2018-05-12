import { combineReducers } from 'redux';
import menuReducer from './menuReducer';

export default combineReducers({
  menuOpen: menuReducer,
  project: projectReducer,
  article: articleReducer,
  articles: articlesReducer,
});