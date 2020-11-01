import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { ARTICLE_LIST_LOADING, GET_ARTICLE_LIST } from './actionTypes';
import Public from '../api/public';

interface IArticlesAction {
  type: string;
  payload: IArticle[];
}

interface IArticleLoadingAction {
  type: string;
  payload: boolean;
}

const getArticleList = () => async (dispatch: Dispatch<IArticlesAction>) => {
  setArticleListLoading(true);

  try {
    const response: AxiosResponse<{ data: IArticle[] }> = await Public.getArticleList();
    dispatch({
      type: GET_ARTICLE_LIST,
      payload: response?.data?.data,
    });
  } catch (error) {
    throw error;
  } finally {
    setArticleListLoading(false);
  }
};

const setArticleListLoading = (isLoading: boolean) => (dispatch: Dispatch<IArticleLoadingAction>) => {
  dispatch({
    type: ARTICLE_LIST_LOADING,
    payload: isLoading,
  });
};

export {
  getArticleList,
  setArticleListLoading,
  IArticlesAction,
  IArticleLoadingAction,
};
