import { TOGGLE_PROJECT } from '../actions/actionTypes';
import { IProjectStateAction } from '../actions/projectActions';
import initialState from './initialState';

export default (state = initialState.project, action: IProjectStateAction) => {
  switch (action.type) {
    case TOGGLE_PROJECT:
      return action.payload;
    default:
      return state;
  }
};
