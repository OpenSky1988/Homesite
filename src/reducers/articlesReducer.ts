import { GET_ARTICLES } from '../actions/actionTypes';
import { IArticlesAction } from '../actions/articlesAtions';
import initialState from './initialState';

export default (state = initialState.articles, action: IArticlesAction) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
    default:
      return state;
  }
};
