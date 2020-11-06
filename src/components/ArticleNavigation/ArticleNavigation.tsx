import React, { useEffect } from 'react';

import './ArticleNavigation.less';

interface IProps {
  articleId: string;
  articleArray: IArticle[];
  navigateArticles: (direction: string) => void;
}

const ArticleNavigation: React.FC<IProps> = ({
  articleId,
  articleArray,
  navigateArticles,
}) => {
  useEffect(() => {
    document.onkeydown = checkKey;
    return () => {
      document.onkeydown = null;
    };
  }, []);

  const checkKey = (event: KeyboardEvent) => {
    // event = event || window.event;

    if (event.keyCode === 37) {
      navigateArticles('back');
    } else if (event.keyCode === 39) {
      navigateArticles('next');
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    navigateArticles(event.currentTarget.classList[0]);
  };

  const currentArticle = parseInt(articleId, 10);
  const maxArticle = articleArray.length - 1;
  const isFirst = currentArticle === 1;
  const isLast = currentArticle === parseInt(articleArray[maxArticle].id, 10);

  return (
    <div className="article-navigation">
      <div
        className={`back view-button${isFirst ? '' : ' _disabled'}`}
        role="none"
        onClick={handleClick}
      >← Back
      </div>
      <div
        className={`next view-button${isLast ? '' : ' _disabled'}`}
        role="none"
        onClick={handleClick}
      >Next →
      </div>
    </div>
  );
};

export default ArticleNavigation;
