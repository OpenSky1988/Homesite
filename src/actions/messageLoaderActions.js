import { TOGGLE_MESSAGE_LOADER } from './actionTypes';

const toggleMessageLoader = isLoading => dispatch => {
  dispatch({
    type: TOGGLE_MESSAGE_LOADER,
    payload: isLoading
  });
};

export default toggleMessageLoader;