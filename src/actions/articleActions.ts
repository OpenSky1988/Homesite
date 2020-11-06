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

    const isFirst = currentArticle === 1;
    const isLast = currentArticle === parseInt(article.list[maxArticle].id, 10);

    if (direction === 'back' && !isFirst) {
      const previous = (currentArticle - 1).toString();
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...article.item,
          key: previous,
        },
      });
    } else if (direction === 'next' && !isLast) {
      const next = (currentArticle + 1).toString();
      dispatch({
        type: NAVIGATE_ARTICLE,
        payload: {
          ...article.item,
          key: next,
        },
      });
    }
  };

export { setArticleState, navigateArticles, IArticleStateAction };
