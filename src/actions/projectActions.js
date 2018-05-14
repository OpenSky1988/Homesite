import { TOGGLE_PROJECT } from './actionTypes';

const setProjectState = (e) => (dispatch, getState) => {
  const body = document.getElementById('body');
  const currentState = getState();
  
  if (currentState.project.open) {
    dispatch({
      type: TOGGLE_PROJECT,
      payload: {
        open: false,
        key: null,
      }
    });

    body.classList.remove('body-overflow');
  } else if (e) {
    dispatch({
      type: TOGGLE_PROJECT,
      payload: {
        open: true,
        key: e.currentTarget.id,
      }
    });

    body.classList.add('body-overflow');
  }
}

export default setProjectState;