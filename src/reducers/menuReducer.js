import { TOGGLE_MENU } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.menu, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...initialState.menu,
        isOpen: action.payload
      };
    default:
      return state;
  }
};
