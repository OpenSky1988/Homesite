import { Dispatch } from 'redux';
import {
  GET_PROJECT_LIST,
  SET_PROJECT_LIST_ERROR,
  SET_PROJECT_LIST_LOADING,
  TOGGLE_PROJECT,
} from './actionTypes';
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
  setProjectListLoading(true);

  try {
    const response = await Public.getProjectList();
    dispatch({
      type: GET_PROJECT_LIST,
      payload: response?.data?.payload,
    });
  } catch (error) {
    setProjectListError(error.message);
  } finally {
    setProjectListLoading(false);
  }
};

const setProjectListLoading = (isLoading: boolean) => (dispatch: Dispatch<IAction<boolean>>) => {
  dispatch({
    type: SET_PROJECT_LIST_LOADING,
    payload: isLoading,
  });
};

const setProjectListError = (error: string) => (dispatch: Dispatch<IAction<string>>) => {
  dispatch({
    type: SET_PROJECT_LIST_ERROR,
    payload: error,
  });
};

export {
  getProjectList,
  setProjectState,
  ProjectStateAction,
};
