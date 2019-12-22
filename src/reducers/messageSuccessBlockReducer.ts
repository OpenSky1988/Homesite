import initialState from './initialState';
import { TOGGLE_MESSAGE_SUCCESS_BLOCK } from '../actions/actionTypes';
import { IMessageSuccessBlockAction } from '../actions/messageSuccessBlockActions';

export default (state = initialState.isSuccessBlockShown, action: IMessageSuccessBlockAction) => {
  switch (action.type) {
    case TOGGLE_MESSAGE_SUCCESS_BLOCK:
      return action.payload;
    default:
      return state;
  }
};
