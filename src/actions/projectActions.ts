import { Dispatch } from 'redux';
import { TOGGLE_PROJECT, GET_PROJECT_LIST } from './actionTypes';
import { IState } from '../reducers/initialState';
import Public from '../api/public';

type ProjectStateAction = IAction<{
  open: boolean;
  key: string | null;
}>;

type ProjectListAction = IAction<IProject[]>;

const setProjectState = (event?: MouseEvent) => (
  dispatch: Dispatch<ProjectStateAction>,
  getState: () => IState,
) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const { project } = getState();

  if (project.item.open) {
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

const getProjectList = () => async (dispatch: Dispatch<ProjectListAction>) => {
  const response = await Public.getProjectList();
  dispatch({
    type: GET_PROJECT_LIST,
    payload: response?.data?.data,
  });
};

export {
  getProjectList,
  setProjectState,
  ProjectStateAction,
};
