import React, { Component } from 'react';

class OpenArticle extends Component {
  render() {
    return (
      <div className="article-wrap">
        <div className="popup-article">
          <div 
            className="article-image" 
            style={{ backgroundImage: `url(/img/blog/img-1-4000-(2000).jpg)` }}></div>
          <div className="content">
            <div className="article-header">
              What caused my career change?
            </div>
            <div className="article-date">
              12 April, 2017
            </div>
            <div className="article-content">
              Most people are told what to do and where to go, for example, by the loved ones. See you!
            </div>
            <div className="article-navigation">
              <div 
                id="back" 
                className="view-button button-inactive">
                ← Back
              </div>
              <div id="next" className="view-button">
                Next →
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OpenArticle;