import React, { Component } from 'react';
import ArticleNavigation from '../ArticleNavigation/ArticleNavigation';
import DataBase from '../DataBase';

import './OpenArticle.css';

class OpenArticle extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) this.props.setArticleState();
  }

  render() {
    const article = DataBase.articles.find(article => article.id === this.props.article);
    console.log(article);
    return (
      <div className="page-wrap" onClick={ this.handleClick }>
        <div className="popup-article">
          <div className="article-image" 
            style={{ backgroundImage: `url("${article.img}")` }}></div>
          <div className="content">
            <div className="article-header">{ article.header }</div>
            <div className="article-date">{ article.date }</div>
            <div className="article-content">
              { article.text }
            </div>
            <ArticleNavigation
              navigateArticles={ this.props.navigateArticles }
              defineInactiveButton={ this.props.defineInactiveButton } />
          </div>
        </div>
      </div>
    )
  }
}

export default OpenArticle;