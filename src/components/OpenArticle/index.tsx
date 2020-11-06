import React, { useEffect, useState } from 'react';
import ArticleNavigation from '../ArticleNavigation/ArticleNavigation';
import Public from '../../api/public';

import './OpenArticle.less';
import StaticData from '../StaticData';

interface IProps {
  articleId: string;
  articleArray: IArticle[];
  navigateArticles: () => void;
}

const OpenArticle: React.FC<IProps> = ({
  articleId,
  articleArray,
  navigateArticles,
}) => {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    img: '',
    header: '',
    date: '',
    text: '',
  });

  useEffect(() => {
    (async function openProjectDidMountIIFE() {
      await getArticle();
    })();
  }, []);

  const getArticle = async () => {
    setLoading(true);
    try {
      const response = await Public.getArticle(articleId);
      const currentArticle = response?.data?.data;
      setArticle(currentArticle);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return isLoading
    ? <h1>Loading...</h1>
    : error
      ? <>{error}</>
      : (
        <>
          <div
            className="article-image"
            style={{ backgroundImage: `url("${article.img}")` }}
          />
          <div className="content">
            <div className="article-header">{article.header}</div>
            <div className="article-date">{article.date}</div>
            <div className="article-content">
              <pre>
                {article.text}
              </pre>
            </div>
            <ArticleNavigation
              articleId={articleId}
              articleArray={articleArray}
              navigateArticles={navigateArticles}
            />
          </div>
        </>
      );
};

export default OpenArticle;
