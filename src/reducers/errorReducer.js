import { UPDATE_ERROR }from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.error, action) => {
  switch (action.type) {
    case UPDATE_ERROR:
      return action.payload;
    default:
      return state;
  }
};