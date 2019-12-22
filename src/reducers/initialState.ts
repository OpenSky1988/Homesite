import { IArticle } from '../components/DataBase';

const initialState = {
  menu: {
    isOpen: false, // Mobile menu state
    fullHeight: 215, // Mobile menu height
  },
  project: {
    open: false,
    key: null,
  },
  article: {
    open: false,
    key: null,
  },
  articles: [],
  contactForm: {
    email: '',
    name: '',
    phone: '',
    text: '',
  },
  error: '',
  isLoading: false,
  isSuccessBlockShown: false,
};

export default initialState;

interface IMenuState {
  isOpen: boolean;
  fullHeight: number;
}

interface IListItemState {
  open: boolean;
  key: string;
}

interface IContactFormState {
  email: string;
  name: string;
  phone: string;
  text: string;
}

interface IState {
  menu: IMenuState;
  project: IListItemState;
  article: IListItemState;
  articles: IArticle[];
  contactForm: IContactFormState;
  error: string;
  isLoading: boolean;
  isSuccessBlockShown: boolean;
}

export { IListItemState, IState };
