import { TOGGLE_MESSAGE_LOADER } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.isLoading, action) => {
  switch (action.type) {
    case TOGGLE_MESSAGE_LOADER:
      return action.payload;
    default:
      return state;
  }
}