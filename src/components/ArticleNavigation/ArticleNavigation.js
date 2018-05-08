import React, { Component } from 'react';
import './ArticleNavigation.css';

class ArticleNavigation extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.navigateArticles(e);
  }

  render() {
    let currentArticle = parseInt(this.props.article);
    const maxArticle = this.props.articleArray.length - 1;
    return (
      <div className="article-navigation">
        <div 
          id="back" 
          className={ currentArticle <= 1 
            ? "view-button button-inactive" 
            : "view-button" 
          }
          onClick={ this.handleClick }>← Back</div>
        <div 
          id="next"
          className={ currentArticle > maxArticle 
            ? "view-button button-inactive" 
            : "view-button" 
          }
          onClick={ this.handleClick }>Next →</div>
      </div>
    );
  }
}

export default ArticleNavigation;
