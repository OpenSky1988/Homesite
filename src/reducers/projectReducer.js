import { TOGGLE_PROJECT } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.project, action) => {
  switch (action.type) {
    case TOGGLE_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
