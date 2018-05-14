import { GET_ARTICLES } from './actionTypes';
import DataBase from '../components/DataBase';

const getArticles = () => dispatch => {
  dispatch({
    type: GET_ARTICLES,
    payload: DataBase.articles,
  });
};

export default getArticles;