import { UPDATE_ERROR } from '../actions/actionTypes';
import { IErrorAction } from '../actions/errorActions';
import initialState from './initialState';

export default (state = initialState.error, action: IErrorAction): string => {
  switch (action.type) {
    case UPDATE_ERROR:
      return action.payload;
    default:
      return state;
  }
};
