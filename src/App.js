/* global document */
/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

/* Static Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

/* Dynamic Components */
import OpenProject from './components/OpenProject/OpenProject';
import OpenArticle from './components/OpenArticle/OpenArticle';

/* DataBase Supplement */
import DataBase from './components/DataBase';

import toggleMobileMenu from './actions/menuActions';
import setProjectState from './actions/projectActions';
import { setArticleState, navigateArticles } from './actions/articleActions';
import getArticles from './actions/articlesAtions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false, // Mobile menu state
      initMenuHeight: 215, // Mobile menu height

      project: {
        open: false,
        key: null,
      },
      article: {
        open: false,
        key: null,
      },
      
      articles: [],
    };

    this.addServices = this.addServices.bind(this);
    this.addProjects = this.addProjects.bind(this);
    this.addArticles = this.addArticles.bind(this);
    this.addLinks = this.addLinks.bind(this);

    this.displayBackArrow = this.displayBackArrow.bind(this);
  }

  componentWillMount = () => {
    this.props.getArticles();
  }

  /* -- Returns Error on String 93 --
    setItemState = (e) => {
    const body = document.getElementById('body');
    const name = e.currentTarget.className;
    const isOpen = this.state[name].open;
    
    if (isOpen) {
      this.setState({
        [name]: {
          open: false,
          key: null,
        }
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        [name]: {
          open: true,
          key: e.currentTarget.id,
        }
      });
      body.classList.add('body-overflow');
    }
  } */

  addServices = () => {
    const servicesList = DataBase.skills.map(skill => (
      <div 
        className="skill"
        key={skill.id}>
        <div
          className="skill-icon"
          style={{ backgroundImage: `url("${skill.img}")` }}
        />
        <h3>{ skill.name }</h3>
        <h4>{ skill.description }</h4>
      </div>
    ));

    return servicesList;
  }

  addProjects = () => {
    const projects = DataBase.projects.map(project => (
      <div
        className="project"
        key={project.id}
        id={project.id}
        onClick={this.props.setProjectState}
        role="none"
      >
        <div className="thumbnail" style={{ backgroundImage: `url("${project.img}")` }}>
          <div className="tb">
            <h3>{ project.name }</h3>
            <div className="hover-description">{ project.shortDescription }</div>
            <p>View more</p>
          </div>
        </div>
        <div className="mobile-text">
          <div>
            <span className="proj-name">{ project.name }</span> - { project.shortDescription }
          </div>
          <div>
            <div className="project-button">View more</div>
          </div>
        </div>
      </div>
    ));

    return projects;
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
          <p className="description">{ article.text }</p>
          <div className="view-button">View more</div>
        </div>
      </div>
    ));

    return articles;
  }

  addLinks = () => {
    const links = DataBase.links.map(link => (
      <li 
        id={link.id}
        key={link.id}>
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={link.img}
            border="0"
            alt={link.alt}
          />
        </a>
      </li>
    ));

    return links;
  }

  navigateArticles = (e) => {
    const button = e.currentTarget.id;
    const currentArticle = parseInt(this.state.article.key, 10);
    const maxArticle = this.state.articles.length - 1;

    if (button === 'back' && currentArticle > 1) {
      this.setState({
        article: {
          ...this.state.article,
          key: (currentArticle - 1).toString(),
        }
      });
    } else if (button === 'next' && currentArticle <= maxArticle) {
      this.setState({
        article: {
          ...this.state.article,
          key: (currentArticle + 1).toString(),
        }
      });
    }
  }

  displayBackArrow = () => {
    const isSmallWindowSize = window.matchMedia('screen and (max-width: 1024px)').matches;

    if (isSmallWindowSize && (this.props.article.open || this.props.project.open)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header
            toggleMobileMenu={this.props.toggleMobileMenu}
            displayBackArrow={this.displayBackArrow}
            /* setProjectState={ this.setProjectState }
            setArticleState={ this.setArticleState } */
          />
          <div id="body-shadow" onClick={this.toggleMobileMenu} role="none" />
          {
            this.props.project.open && <OpenProject
              project={this.props.project.key}
              setProjectState={this.props.setProjectState}
            />
          }
          {
            this.props.article.open && <OpenArticle
              article={this.props.article.key}
              articleArray={this.state.articles}
              setArticleState={this.props.setArticleState}
              navigateArticles={this.props.navigateArticles}
            />
          }
          <Route
            path="(/|/home)"
            render={() => (<Main
              addServices={this.addServices}
              addProjects={this.addProjects}
              addLinks={this.addLinks}
            />)
            }
          />
          <Route
            path="/blog"
            render={() => (<Blog
              addArticles={this.addArticles}
            />)
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

/* This is a mess, I know... I moved everything here from Redux just for now 
for the sake of transition from React state to Redux. 
Everything will be distributed among corresponding components. */

const mapStateToProps = state => ({
  project: state.project,
  article: state.article,
  articles: state.articles,
});

App.propTypes = {
  setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired,
  navigateArticles: PropTypes.func.isRequired,
  getArticles: PropTypes.func.isRequired,
  /* displayBackArrow: PropTypes.func.isRequired, */
  toggleMobileMenu: PropTypes.func.isRequired,
  project: PropTypes.shape({
    open: PropTypes.bool.isRequired, 
    key: PropTypes.string,
  }).isRequired,
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

export default connect(
  mapStateToProps,
  {
    toggleMobileMenu,
    setProjectState,
    setArticleState,
    navigateArticles,
    getArticles,
  }
)(App);
