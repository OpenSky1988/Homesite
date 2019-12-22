import { Dispatch } from 'redux';
import { TOGGLE_PROJECT } from './actionTypes';
import { IState } from '../reducers/initialState';

interface IProjectStateAction {
  type: string;
  payload: {
    open: boolean;
    key: string | null;
  };
}

const setProjectState = (event?: MouseEvent) => (
  dispatch: Dispatch<IProjectStateAction>,
  getState: () => IState,
) => {
  const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
  const currentState = getState();

  if (currentState.project.open) {
    dispatch({
      type: TOGGLE_PROJECT,
      payload: {
        open: false,
        key: null,
      },
    });

    body.classList.remove('body-overflow');
  } else if (event) {
    const targetProjectElement = (event.currentTarget as HTMLElement).id;

    dispatch({
      type: TOGGLE_PROJECT,
      payload: {
        open: true,
        key: targetProjectElement,
      },
    });

    body.classList.add('body-overflow');
  }
};

export default setProjectState;
export { IProjectStateAction };
