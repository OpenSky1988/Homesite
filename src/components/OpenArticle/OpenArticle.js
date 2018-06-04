import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const article = DataBase.articles.find(curentArticle => (
      curentArticle.id === this.props.article
    ));

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
                { article.text }
              </pre>
            </div>
            <ArticleNavigation
              navigateArticles={this.props.navigateArticles}
              article={this.props.article}
              articleArray={this.props.articleArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

OpenArticle.propTypes = {
  setArticleState: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired,
  navigateArticles: PropTypes.func.isRequired,
  articleArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OpenArticle;
