import React, { useEffect } from 'react';

import './ArticleNavigation.less';

interface IProps {
  navigation: {
    prevId: string;
    nextId: string;
  };
  getArticle: (articleId: string) => void;
}

const ArticleNavigation: React.FC<IProps> = ({
  navigation,
  getArticle,
}) => {
  const { prevId, nextId } = navigation;
  useEffect(() => {
    document.onkeydown = checkKey;
    return () => {
      document.onkeydown = null;
    };
  }, []);

  const checkKey = (event: KeyboardEvent) => {
    // event = event || window.event;

    if (event.keyCode === 37 && prevId) {
      getArticle(prevId);
    } else if (event.keyCode === 39 && nextId) {
      getArticle(nextId);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    getArticle(event.currentTarget.id);
  };

  return (
    <div className="article-navigation">
      <div
        className={`back view-button${prevId ? '' : ' _disabled'}`}
        id={prevId}
        role="none"
        onClick={handleClick}
      >← Back
      </div>
      <div
        className={`next view-button${nextId ? '' : ' _disabled'}`}
        id={nextId}
        role="none"
        onClick={handleClick}
      >Next →
      </div>
    </div>
  );
};

export default ArticleNavigation;
