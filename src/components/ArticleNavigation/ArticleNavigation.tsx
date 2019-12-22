import React, { Component } from 'react';

import { IArticle } from '../DataBase';
import './ArticleNavigation.less';

interface IProps {
  articleId: string;
  articleArray: IArticle[];
  navigateArticles: (direction: string) => void;
}

class ArticleNavigation extends Component<IProps, {}> {
  componentDidMount() {
    document.onkeydown = this.checkKey;
  }

  checkKey = (event: KeyboardEvent) => {
    event = event || window.event;

    if (event.keyCode === 37) {
      this.props.navigateArticles('back');
    } else if (event.keyCode === 39) {
      this.props.navigateArticles('next');
    }
  }

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.props.navigateArticles(event.currentTarget.classList[0]);
  }

  render() {
    const currentArticle = parseInt(this.props.articleId, 10);
    const maxArticle = this.props.articleArray.length - 1;

    return (
      <div className="article-navigation">
        <div
          className={
            currentArticle <= 1
            ? 'back view-button button-inactive'
            : 'back view-button'
          }
          role="none"
          onClick={this.handleClick}
        >← Back
        </div>
        <div
          className={
            currentArticle > maxArticle
            ? 'next view-button button-inactive'
            : 'next view-button'
          }
          role="none"
          onClick={this.handleClick}
        >Next →
        </div>
      </div>
    );
  }
}

export default ArticleNavigation;
