import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Blog.css';

import OpenArticle from '../OpenArticle/OpenArticle';

import { setArticleState, navigateArticles } from '../../actions/articleActions';
import getArticles from '../../actions/articlesAtions';

class Blog extends Component {
  componentWillMount = () => {
    this.props.getArticles();
  }
  
  addArticles = () => {
    const articles = this.props.articles.map(article => (
      <div
        className="article"
        key={article.id}
        id={article.id}
        onClick={this.props.setArticleState}
        role="none"
      >
        <div
          className="ap-image"
          id="img-1"
          style={{ backgroundImage: `url("${article.img}")` }}
        />
        <div className="content">
          <h2>{ article.header }</h2>
          <div className="post-date">
            <h4>{ article.date }</h4>
          </div>
          <p className="description">{ this.cutArticleDescription(article.text) }</p>
          <div className="view-button">View more</div>
        </div>
      </div>
    ));

    return articles;
  }

  cutArticleDescription = fullDesciption => {
    let shortDescription = fullDesciption.substr(0, 200);
    shortDescription = shortDescription
      .substr(0, Math.min(
        shortDescription.length,
        shortDescription.lastIndexOf(" ")
      )
    );

    return (`${shortDescription}...`);
  }

  render() {
    const articles = this.addArticles();

    return (
      <main className="blog">
        {
          this.props.article.open && <OpenArticle
            article={this.props.article.key}
            articleArray={this.props.articles}
            setArticleState={this.props.setArticleState}
            navigateArticles={this.props.navigateArticles}
          />
        }
        <header id="blog-title">
          <div className="container">
            <div className="h1">
              <div className="letter b">B</div>
              <div className="letter l">l</div>
              <div className="letter o">o</div>
              <div className="letter g">g</div>
            </div>
            <h3>Thoughts on work and life.</h3>
          </div>
        </header>

        <section id="blog">
          <div className="container" id="cont">
            { articles }
          </div>
        </section>
      </main>
    );
  }
};

const mapStateToProps = state => ({
  article: state.article,
  articles: state.articles,
});

Blog.propTypes = {
  getArticles: PropTypes.func.isRequired,
  setArticleState: PropTypes.func.isRequired,
  navigateArticles: PropTypes.func.isRequired,
  article: PropTypes.shape({
    open: PropTypes.bool.isRequired, 
    key: PropTypes.string,
  }).isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      header: PropTypes.string,
      text: PropTypes.string,
      img: PropTypes.string,
      date: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, {
  getArticles,
  setArticleState,
  navigateArticles,
})(Blog);
