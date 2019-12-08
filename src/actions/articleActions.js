import { TOGGLE_ARTICLE, NAVIGATE_ARTICLE } from './actionTypes';

const setArticleState = (e) => (dispatch, getState) => {
  const body = document.getElementById('body');
  const currentState = getState();
  
  if (currentState.article.open) {
    dispatch({
      type: TOGGLE_ARTICLE,
      payload: {
        open: false,
        key: null,
      }
    });

    body.classList.remove('body-overflow');
  } else if (e) {
    dispatch({
      type: TOGGLE_ARTICLE,
      payload: {
        open: true,
        key: e.currentTarget.id,
      }
    });

    body.classList.add('body-overflow');
  }
}

const navigateArticles = (direction) => (dispatch, getState) => {
    const currentState = getState();
    const currentArticle = parseInt(currentState.article.key, 10);
    const maxArticle = currentState.articles.length - 1;

    if (direction === 'back' && currentArticle > 1) {
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...currentState.article,
          key: (currentArticle - 1).toString(),
        }
      });
    } else if (direction === 'next' && currentArticle <= maxArticle) {
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...currentState.article,
          key: (currentArticle + 1).toString(),
        }
      });
    }
  }

export { setArticleState, navigateArticles };