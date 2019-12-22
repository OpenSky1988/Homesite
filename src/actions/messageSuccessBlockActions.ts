import { Dispatch } from 'redux';
import { TOGGLE_MESSAGE_SUCCESS_BLOCK } from './actionTypes';

interface IMessageSuccessBlockAction {
  type: string;
  payload: boolean;
}

const toggleMessageSuccessBlock = (isSuccessBlockShown: boolean) => (
  dispatch: Dispatch<IMessageSuccessBlockAction>,
) => {
  dispatch({
    type: TOGGLE_MESSAGE_SUCCESS_BLOCK,
    payload: isSuccessBlockShown,
  });
};

export default toggleMessageSuccessBlock;
export { IMessageSuccessBlockAction };
