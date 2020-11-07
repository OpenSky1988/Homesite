import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Blog.less';

import Modal from '../../components/Modal';
import OpenArticle from '../../components/OpenArticle';

import { setArticleState } from '../../actions/articleActions';
import { getArticleList } from '../../actions/articlesAtions';
import { IState } from '../../reducers/initialState';

interface IProps {
  article: IListItemState;
  articleList: IArticle[];
  isArticleListLoading: boolean;
  getArticleList: () => void;
  setArticleState: () => void;
}

const BlogScreen: React.FC<IProps> = ({
  article,
  articleList,
  isArticleListLoading,
  getArticleList,
  setArticleState,
}) => {
  useEffect(() => {
    getArticleList();
  }, []);

  const renderArticle = (article: IArticle) => (
    <div
      className="article"
      key={(article._id as string)}
      id={(article._id as string)}
      onClick={setArticleState}
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
        <p className="description">{cutArticleDescription(article.text)}</p>
        <div className="view-button">View more</div>
      </div>
    </div>
  );

  const cutArticleDescription = (fullDesciption: string) => {
    let shortDescription = fullDesciption.substr(0, 200);
    shortDescription = shortDescription
      .substr(0, Math.min(shortDescription.length, shortDescription.lastIndexOf(' ')));

    return `${shortDescription}...`;
  };

  const renderTitle = () => (
    <div className="h1">
      <div className="letter b">B</div>
      <div className="letter l">l</div>
      <div className="letter o">o</div>
      <div className="letter g">g</div>
    </div>
  );

  const blogContent = Array.isArray(articleList)
    ? articleList.map(renderArticle)
    : 'No articles yet';

  const handleClose = (event: MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) { setArticleState(); }
  };

  return (
    <main className="blog">
      <header id="blog-title">
        <div className="container">
          {renderTitle()}
          <h3>Thoughts on work and life.</h3>
        </div>
      </header>

      <section id="blog">
        <div className="container" id="cont">
          {isArticleListLoading
            ? 'Loading...'
            : blogContent
          }
        </div>
      </section>
      <Modal className="_article" open={article.open} handleClose={handleClose}>
        <OpenArticle articleId={article.key} />
      </Modal>
    </main>
  );
};

const mapStateToProps = (state: IState) => ({
  article: state.article.item,
  articleList: state.article.list,
  isArticleListLoading: state.article.isLoading,
});

export default connect(mapStateToProps, {
  getArticleList,
  setArticleState,
})(BlogScreen);
