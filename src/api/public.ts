import { AxiosPromise } from 'axios';
import { get } from './core';

const Public = {
  getArticleList: (): AxiosPromise<{data: IArticle[]}> =>
    get('/article/list'),

  getArticle: (id: string): AxiosPromise<{data: IArticle}> =>
    get(`/article/${id}`),

  getProjectList: (): AxiosPromise<{data: IProject[]}> =>
    get('/project/list'),

  getProject: (id: string): AxiosPromise<{data: IProject}> =>
    get(`/project/${id}`),
};

export default Public;
