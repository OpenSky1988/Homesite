import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ArticleNavigation.css';

class ArticleNavigation extends Component {
  handleClick = (e) => {
    this.props.navigateArticles(e);
  }

  render() {
    const currentArticle = parseInt(this.props.article, 10);
    const maxArticle = this.props.articleArray.length - 1;

    return (
      <div className="article-navigation">
        <div
          id="back"
          className={
            currentArticle <= 1
            ? 'view-button button-inactive'
            : 'view-button'
          }
          onClick={this.handleClick}
        >← Back
        </div>
        <div
          id="next"
          className={
            currentArticle > maxArticle
            ? 'view-button button-inactive'
            : 'view-button'
          }
          onClick={this.handleClick}
        >Next →
        </div>
      </div>
    );
  }
}

ArticleNavigation.propTypes = {
  navigateArticles: PropTypes.func.isRequired,
  article: PropTypes.string.isRequired,
  articleArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ArticleNavigation;
