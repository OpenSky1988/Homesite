import React, { useEffect, useState } from 'react';
import ArticleNavigation from '../ArticleNavigation/ArticleNavigation';
import Public from '../../api/public';

import './OpenArticle.less';

interface IProps {
  articleId: string;
}

const OpenArticle: React.FC<IProps> = ({
  articleId,
}) => {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    date: '',
    header: '',
    img: '',
    text: '',
    navigation: {
      prevId: '',
      nextId: '',
    },
  });

  useEffect(() => {
    (async function openProjectDidMountIIFE() {
      await getArticle(articleId);
    })();
  }, []);

  const getArticle = async (articleId: string) => {
    setLoading(true);
    try {
      const response = await Public.getArticle(articleId);
      const article = response?.data?.payload;
      setArticle(article);
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
              navigation={article.navigation}
              getArticle={getArticle}
            />
          </div>
        </>
      );
};

export default OpenArticle;
