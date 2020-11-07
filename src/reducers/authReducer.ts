import { TOGGLE_AUTHORIZED } from '../actions/actionTypes';
import { IAuthAction } from '../actions/authActions';
import initialState from './initialState';

export default (state = initialState.isAuthorized, action: IAuthAction) => {
  switch (action.type) {
    case TOGGLE_AUTHORIZED:
      return action.payload;
    default:
      return state;
  }
};
