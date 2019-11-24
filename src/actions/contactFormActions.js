import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from './actionTypes';

const updateContactForm = (key, value) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_CONTACT_FORM,
    payload: {
      ...getState().contactForm,
      [key]: value,
    }
  });
};

const clearContactForm = () => dispatch => {
  dispatch({
    type: CLEAR_CONTACT_FORM,
  });
};

export { updateContactForm, clearContactForm };