import {
  ARTICLE_LIST_LOADING,
  GET_ARTICLE_LIST,
  NAVIGATE_ARTICLE,
  TOGGLE_ARTICLE,
} from '../actions/actionTypes';
import { IArticlesAction } from '../actions/articlesAtions';
import initialState from './initialState';

export default (state = initialState.article, action: IArticlesAction) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case ARTICLE_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TOGGLE_ARTICLE:
      return {
        ...state,
        item: action.payload,
      };
    case NAVIGATE_ARTICLE:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
