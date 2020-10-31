import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Blog.less';

import OpenArticle from '../../components/OpenArticle/OpenArticle';

import { setArticleState, navigateArticles } from '../../actions/articleActions';
import { getArticleList } from '../../actions/articlesAtions';
import { IState } from '../../reducers/initialState';

interface IProps {
  article: IListItemState;
  articleList: IArticle[];
  isArticleListLoading: boolean;

  getArticles: () => void;
  navigateArticles: () => void;
  setArticleState: () => void;
}

class BlogScreen extends Component <IProps, {}> {
  componentDidMount = () => {
    this.props.getArticles();
  }

  renderArticle = (article: IArticle) => (
    <div
      className="article"
      key={(article.id as string)}
      id={(article.id as string)}
      onClick={this.props.setArticleState}
      role="none"
    >
      <div
        className="ap-image"
        id="img-1"
        style={{ backgroundImage: `url("${article.img}")` }}
      />
      <div className="content">
        <h2>{article.header}</h2>
        <div className="post-date">
          <h4>{article.date}</h4>
        </div>
        <p className="description">{this.cutArticleDescription(article.text)}</p>
        <div className="view-button">View more</div>
      </div>
    </div>
  )

  cutArticleDescription = (fullDesciption: string) => {
    let shortDescription = fullDesciption.substr(0, 200);
    shortDescription = shortDescription
      .substr(0, Math.min(
        shortDescription.length,
        shortDescription.lastIndexOf(' '),
      ),
    );

    return (`${shortDescription}...`);
  }

  renderTitle = () => (
    <div className="h1">
      <div className="letter b">B</div>
      <div className="letter l">l</div>
      <div className="letter o">o</div>
      <div className="letter g">g</div>
    </div>
  )

  render() {
    const blogContent = Array.isArray(this.props.articleList)
      ? this.props.articleList.map(this.renderArticle)
      : 'No articles yet';

    return (
      <main className="blog">
        <header id="blog-title">
          <div className="container">
            {this.renderTitle()}
            <h3>Thoughts on work and life.</h3>
          </div>
        </header>

        <section id="blog">
          <div className="container" id="cont">
            { this.props.isArticleListLoading
              ? 'Loading...'
              : blogContent
            }
          </div>
        </section>

        {
          this.props.article.open && <OpenArticle
            articleId={this.props.article.key}
            articleArray={this.props.articleList}
            setArticleState={this.props.setArticleState}
            navigateArticles={this.props.navigateArticles}
          />
        }
      </main>
    );
  }
}

const mapStateToProps = (state: IState) => ({
  article: state.article.item,
  articleList: state.article.list,
  isArticleListLoading: state.article.isLoading,
});

export default connect(mapStateToProps, {
  getArticles: getArticleList,
  setArticleState,
  navigateArticles,
})(BlogScreen);
