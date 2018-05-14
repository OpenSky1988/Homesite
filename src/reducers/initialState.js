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
};

export default initialState;