import { TOGGLE_ARTICLE } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.article, action) => {
  switch (action.type) {
    case TOGGLE_ARTICLE:
      return action.payload;
    default:
      return state;
  }
};
