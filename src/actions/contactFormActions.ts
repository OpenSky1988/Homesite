import { Dispatch } from 'redux';
import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from './actionTypes';
import { IState } from '../reducers/initialState';

interface IContactFormUpdateAction {
  type: string;
  payload: {
    email: string;
    name: string;
    phone: string;
    text: string;
  };
}

const updateContactForm = (key: string, value: string) => (
  dispatch: Dispatch<IContactFormUpdateAction>,
  getState: () => IState,
) => {
  dispatch({
    type: UPDATE_CONTACT_FORM,
    payload: {
      ...getState().contactForm,
      [key]: value,
    },
  });
};

const clearContactForm = () => (dispatch: Dispatch<{type: string}>) => {
  dispatch({
    type: CLEAR_CONTACT_FORM,
  });
};

export { updateContactForm, clearContactForm, IContactFormUpdateAction };
