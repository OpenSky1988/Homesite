import { Dispatch } from 'redux';
import { GET_ARTICLES } from './actionTypes';
import DataBase, { IArticle } from '../components/DataBase';

interface IArticlesAction {
  type: string;
  payload: IArticle[];
}

const getArticles = () => (dispatch: Dispatch<IArticlesAction>) => {
  dispatch({
    type: GET_ARTICLES,
    payload: DataBase.articles,
  });
};

export default getArticles;
export { IArticlesAction };
