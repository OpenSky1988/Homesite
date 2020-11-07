import {
  GET_PROJECT_LIST,
  SET_PROJECT_LIST_ERROR,
  SET_PROJECT_LIST_LOADING,
  TOGGLE_PROJECT,
} from '../actions/actionTypes';
import { ProjectStateAction } from '../actions/projectActions';
import initialState from './initialState';

export default (state = initialState.project, action: ProjectStateAction) => {
  switch (action.type) {
    case GET_PROJECT_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case SET_PROJECT_LIST_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_PROJECT_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TOGGLE_PROJECT:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};
