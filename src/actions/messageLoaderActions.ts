import { Dispatch } from 'redux';
import { TOGGLE_MESSAGE_LOADER } from './actionTypes';

interface IMessageLoaderAction {
  type: string;
  payload: boolean;
}

const toggleMessageLoader = (isLoading: boolean) => (dispatch: Dispatch<IMessageLoaderAction>) => {
  dispatch({
    type: TOGGLE_MESSAGE_LOADER,
    payload: isLoading,
  });
};

export default toggleMessageLoader;
export { IMessageLoaderAction };
