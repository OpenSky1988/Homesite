import React, { Component, MouseEvent } from 'react';
import ArticleNavigation from '../ArticleNavigation/ArticleNavigation';
import DataBase, { IArticle } from '../DataBase';
import './OpenArticle.less';

interface IProps {
  articleId: string;
  articleArray: IArticle[];
  setArticleState: () => void;
  navigateArticles: () => void;
}

class OpenArticle extends Component <IProps, {}> {
  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) { this.props.setArticleState(); }
  }

  render() {
    const article = DataBase.articles.find((curentArticle) => (
      curentArticle.id === this.props.articleId
    )) as IArticle;

    return (
      <div className="page-wrap" onClick={this.handleClick} role="none">
        <div className="popup-article">
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
              articleId={this.props.articleId}
              articleArray={this.props.articleArray}
              navigateArticles={this.props.navigateArticles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OpenArticle;
