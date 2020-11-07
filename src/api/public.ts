import { AxiosPromise } from 'axios';
import { get } from './core';

const Public = {
  getArticleList: (): AxiosPromise<{payload: IArticle[]}> =>
    get('/article/list'),

  getArticle: (id: string): AxiosPromise<{payload: IArticle & {
    navigation: {
      prevId: string;
      nextId: string;
    },
  }}> =>
    get(`/article/${id}`),

  getProjectList: (): AxiosPromise<{payload: IProject[]}> =>
    get('/project/list'),

  getProject: (id: string): AxiosPromise<{payload: IProject}> =>
    get(`/project/${id}`),
};

export default Public;
