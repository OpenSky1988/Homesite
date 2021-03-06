import { Dispatch } from 'redux';
import { UPDATE_MESSAGE_ERROR } from './actionTypes';

interface IErrorAction {
  type: string;
  payload: string;
}

const updateError = (errorMessage: string) => (dispatch: Dispatch<IErrorAction>) => {
  dispatch({
    type: UPDATE_MESSAGE_ERROR,
    payload: errorMessage,
  });
};

export default updateError;
export { IErrorAction };
