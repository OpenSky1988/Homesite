const initialState = {
  menu: {
    isOpen: false, // Mobile menu state
    fullHeight: 215, // Mobile menu height
  },
  project: {
    error: '',
    isLoading: false,
    item: {
      open: false,
      key: '',
    },
    list: [] as IProject[],
  },
  article: {
    error: '',
    isLoading: false,
    item: {
      open: false,
      key: '',
    },
    list: [] as IArticle[],
  },
  contactForm: {
    error: '',
    input: {
      email: '',
      name: '',
      phone: '',
      text: '',
    },
    isLoading: false,
    isSuccessBlockShown: false,
  },
  isAuthorized: false,
};

interface IMenuState {
  isOpen: boolean;
  fullHeight: number;
}

interface IListItemState {
  open: boolean;
  key: string;
}

interface IContactFromInput {
  email: string;
  name: string;
  phone: string;
  text: string;
}

interface IContactFormState {
  error: string;
  input: IContactFromInput;
  isLoading: boolean;
  isSuccessBlockShown: boolean;
}

interface IState {
  menu: IMenuState;
  project: {
    error: string;
    isLoading: boolean;
    item: IListItemState;
    list: IProject[];
  };
  article: {
    error: string;
    isLoading: boolean;
    item: IListItemState;
    list: IArticle[];
  };
  contactForm: IContactFormState;
  isAuthorized: boolean;
}

export default initialState;
export {
  IContactFormState,
  IContactFromInput,
  IListItemState,
  IState,
};
