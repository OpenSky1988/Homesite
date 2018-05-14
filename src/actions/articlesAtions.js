import { GET_ARTICLES } from './actionTypes';
import DataBase from '../components/DataBase';

const getArticles = () => (dispatch, getState) => {
  const currentState = getState();

  dispatch({
    type: GET_ARTICLES,
    payload: DataBase.articles,
  });

  console.log(currentState);
};

export default getArticles;