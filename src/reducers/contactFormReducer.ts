import {
  CLEAR_CONTACT_FORM,
  TOGGLE_MESSAGE_SUCCESS_BLOCK,
  TOGGLE_MESSAGE_LOADER,
  UPDATE_CONTACT_FORM,
  UPDATE_MESSAGE_ERROR,
} from '../actions/actionTypes';
import { IContactFormUpdateAction } from '../actions/contactFormActions';
import { IMessageLoaderAction } from '../actions/messageLoaderActions';
import { IMessageSuccessBlockAction } from '../actions/messageSuccessBlockActions';
import { IErrorAction } from '../actions/errorActions';
import initialState from './initialState';

export default (state = initialState.contactForm, action: IContactFormUpdateAction) => {
  switch (action.type) {
    case UPDATE_CONTACT_FORM:
      return {
        ...state,
        input: action.payload,
      };
    case CLEAR_CONTACT_FORM:
      return {
        ...state,
        input: {
          email: '',
          name: '',
          phone: '',
          text: '',
        },
      };
    case TOGGLE_MESSAGE_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case TOGGLE_MESSAGE_SUCCESS_BLOCK:
      return {
        ...state,
        isSuccessBlockShown: action.payload,
      };
    case UPDATE_MESSAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
