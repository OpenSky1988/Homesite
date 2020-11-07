import { Dispatch } from 'redux';
import { TOGGLE_ARTICLE } from './actionTypes';
import { IState } from '../reducers/initialState';

interface IArticleStateAction {
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

export { setArticleState, IArticleStateAction };
