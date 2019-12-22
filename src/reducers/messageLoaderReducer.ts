import { TOGGLE_MESSAGE_LOADER } from '../actions/actionTypes';
import { IMessageLoaderAction } from '../actions/messageLoaderActions';
import initialState from './initialState';

export default (state = initialState.isLoading, action: IMessageLoaderAction) => {
  switch (action.type) {
    case TOGGLE_MESSAGE_LOADER:
      return action.payload;
    default:
      return state;
  }
};
