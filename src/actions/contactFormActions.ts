import { Dispatch } from 'redux';
import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from './actionTypes';
import { IContactFromInput, IState } from '../reducers/initialState';

interface IContactFormUpdateAction {
  type: string;
  payload: IContactFromInput;
}

const updateContactForm = (key: string, value: string) => (
  dispatch: Dispatch<IContactFormUpdateAction>,
  getState: () => IState,
) => {
  const { contactForm } = getState();
  dispatch({
    type: UPDATE_CONTACT_FORM,
    payload: {
      ...contactForm.input,
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
