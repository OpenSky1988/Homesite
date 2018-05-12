import { OPEN_MENU, CLOSE_MENU } from '../actions/actionTypes';

const initialState = {
  menuOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
