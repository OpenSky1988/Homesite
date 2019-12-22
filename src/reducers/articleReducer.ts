import { TOGGLE_ARTICLE, NAVIGATE_ARTICLE } from '../actions/actionTypes';
import { IArticleStateAction } from '../actions/articleActions';
import initialState from './initialState';

export default (state = initialState.article, action: IArticleStateAction) => {
  switch (action.type) {
    case TOGGLE_ARTICLE:
      return action.payload;
    case NAVIGATE_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};
