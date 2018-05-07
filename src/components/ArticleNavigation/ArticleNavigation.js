import React, { Component } from 'react';
import './ArticleNavigation.css';

class ArticleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.navigateArticles();
    this.props.defineInactiveButton();
  }

  render() {
    return (
      <div className="article-navigation">
        <div 
          id="back" 
          className="view-button"
          onClick={ this.props.navigateArticles }>← Back</div>
        <div 
          id="next"
          className="view-button"
          onClick={ this.props.navigateArticles }>Next →</div>
      </div>
    );
  }
}

export default ArticleNavigation;
