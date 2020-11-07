import { Dispatch } from 'redux';
import { TOGGLE_AUTHORIZED } from './actionTypes';

interface IAuthAction {
  type: string;
  payload: boolean;
}

const toggleAuthorized = (isAuthorized: boolean) => (dispatch: Dispatch<IAuthAction>) => {
  dispatch({
    type: TOGGLE_AUTHORIZED,
    payload: isAuthorized,
  });
};

export default toggleAuthorized;
export { IAuthAction };
