import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from '../actions/actionTypes';
import { IContactFormUpdateAction } from '../actions/contactFormActions';
import initialState from './initialState';

export default (state = initialState.contactForm, action: IContactFormUpdateAction) => {
  switch (action.type) {
    case UPDATE_CONTACT_FORM:
      return action.payload;
    case CLEAR_CONTACT_FORM:
      return {
        email: '',
        name: '',
        phone: '',
        text: '',
      };
    default:
      return state;
  }
};
