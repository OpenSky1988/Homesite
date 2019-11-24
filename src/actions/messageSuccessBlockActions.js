import { TOGGLE_MESSAGE_SUCCESS_BLOCK } from './actionTypes';

const toggleMessageSuccessBlock = isSuccessBlockShown => dispatch => {
  dispatch({
    type: TOGGLE_MESSAGE_SUCCESS_BLOCK,
    payload: isSuccessBlockShown
  });
};

export default toggleMessageSuccessBlock;