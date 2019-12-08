const initialState = {
  menu:{
    isOpen: false, // Mobile menu state
    fullHeight: 215,// Mobile menu height
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
    text: ''
  },
  error: "",
  isLoading: false,
  isSuccessBlockShown: false,
};

export default initialState;