import { AxiosPromise } from 'axios';
import { get } from './core';

const Public = {
    getArticleList: (): AxiosPromise<{data: IArticle[]}> =>
        get('/article/list'),

    getProjectList: (): AxiosPromise<{data: IProject[]}> =>
        get('/project/list'),
};

export default Public;
