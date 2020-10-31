import { Dispatch } from 'redux';
import { TOGGLE_ARTICLE, NAVIGATE_ARTICLE } from './actionTypes';
import { IState } from '../reducers/initialState';

interface IArticleStateAction {
  type: string;
  payload: {
    open: boolean;
    key: string | null;
  };
}

interface INavigateArticlesAction {
  type: string;
  payload: {
    open: boolean;
    key: string | null;
  };
}

const setArticleState = (event?: MouseEvent) => (
  dispatch: Dispatch<IArticleStateAction>,
  getState: () => IState,
) => {
  const body = document.querySelector('body') as HTMLBodyElement;
  const { article } = getState();

  if (article.item.open) {
    dispatch({
      type: TOGGLE_ARTICLE,
      payload: {
        open: false,
        key: null,
      },
    });

    body.classList.remove('body-overflow');
  } else if (event) {
    const targetArticleElementId = (event.currentTarget as HTMLElement).id;

    dispatch({
      type: TOGGLE_ARTICLE,
      payload: {
        open: true,
        key: targetArticleElementId,
      },
    });

    body.classList.add('body-overflow');
  }
};

const navigateArticles = (direction: string) => (
  dispatch: Dispatch<INavigateArticlesAction>,
  getState: () => IState,
): void => {
    const { article } = getState();
    const currentArticle = parseInt(article.item.key, 10);
    const maxArticle = article.list.length - 1;

    if (direction === 'back' && currentArticle > 1) {
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...article.item,
          key: (currentArticle - 1).toString(),
        },
      });
    } else if (direction === 'next' && currentArticle <= maxArticle) {
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...article.item,
          key: (currentArticle + 1).toString(),
        },
      });
    }
  };

export { setArticleState, navigateArticles, IArticleStateAction };
