import { CLEAR_CONTACT_FORM, UPDATE_CONTACT_FORM } from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.contactForm, action) => {
  switch (action.type) {
    case UPDATE_CONTACT_FORM: 
      return action.payload;
    case CLEAR_CONTACT_FORM:
      return {
        email: '',
        name: '',
        phone: '',
        text: ''
      };
    default:
      return state;
  }
}