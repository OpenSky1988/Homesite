/* global document */
/* global window */

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';

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


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false, // Mobile menu state
      initMenuHeight: 215, // Mobile menu height

      projectOpen: false,
      projectKey: null,

      articleOpen: false,
      articleKey: null,
      articles: [],
    };

    this.addServices = this.addServices.bind(this);
    this.addProjects = this.addProjects.bind(this);
    this.addArticles = this.addArticles.bind(this);
    this.addLinks = this.addLinks.bind(this);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.setProjectState = this.setProjectState.bind(this);
    this.setArticleState = this.setArticleState.bind(this);

    this.navigateArticles = this.navigateArticles.bind(this);
    this.displayBackArrow = this.displayBackArrow.bind(this);
  }

  componentWillMount() {
    this.setState({ articles: DataBase.articles });
  }

  setProjectState(e) {
    const body = document.getElementById('body');
    if (this.state.projectOpen) {
      this.setState({
        projectOpen: false,
        projectKey: null,
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        projectOpen: true,
        projectKey: e.currentTarget.id,
      });
      body.classList.add('body-overflow');
    }
  }

  setArticleState(e) {
    const body = document.getElementById('body');

    if (this.state.articleOpen) {
      this.setState({
        articleOpen: false,
        articleKey: null,
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        articleOpen: true,
        articleKey: e.currentTarget.id,
      });
      body.classList.add('body-overflow');
    }
  }

  /* setArticleState(e) {
    const body = document.getElementById('body');
    let itemType = '';

    if (this.state[`${itemType}Open`]) {
      itemType = '';
      console.log(itemType);

      this.setState({
        articleOpen: false,
        articleKey: null
      });
      body.classList.remove('body-overflow');
    } else {
      itemType = e.currentTarget.className;

      this.setState({
        articleOpen: true,
        articleKey: e.currentTarget.id
      });
      body.classList.add('body-overflow');
    }
  } */

  addServices() {
    const servicesList = DataBase.skills.map(skill => (
      <div className="skill">
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

  addProjects() {
    const projects = DataBase.projects.map(project => (
      <div
        className="project"
        key={project.id}
        id={project.id}
        onClick={this.setProjectState}
        role="button"
      >
        <div className="thumbnail" style={{ backgroundImage: `url("${project.img}")` }}>
          <div className="tb">
            <h3>{ project.name }</h3>
            <div className="hover-description">{ project.shortDescription }</div>
            <p>View more</p>
          </div>
        </div>
        <div className="mobile-text">
          <p>
            <span className="proj-name">{ project.name }</span> - { project.shortDescription }
          </p>
          <p>
            <div className="project-button">View more</div>
          </p>
        </div>
      </div>
    ));

    return projects;
  }

  addArticles() {
    const articles = this.state.articles.map(article => (
      <div
        className="article"
        key={article.id}
        id={article.id}
        onClick={this.setArticleState}
        role="link"
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

  addLinks() {
    const links = DataBase.links.map(link => (
      <li id={link.id}>
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

  toggleMobileMenu(e) {
    const mobileNavMenu = document.getElementById('mobile-nav');
    const bodyShadow = document.getElementById('body-shadow');
    const navTrigger = document.getElementById('nav-trigger');

    if (this.state.menuOpen) {
      navTrigger.classList.remove('is-open');
      this.setState({ menuOpen: false });
      this.setProjectState();
      this.setArticleState();

      mobileNavMenu.style.height = '0px';
      bodyShadow.style.opacity = '0';
      bodyShadow.style.display = 'none';
    } else if (!(e.target.className === 'logo-button logom')) {
      navTrigger.classList.add('is-open');
      this.setState({ menuOpen: true });

      mobileNavMenu.style.height = `${this.state.initMenuHeight}px`;
      bodyShadow.style.display = 'block';
      bodyShadow.style.opacity = '0.6';
    }
  }

  navigateArticles(e) {
    const button = e.currentTarget.id;
    const currentArticle = parseInt(this.state.articleKey, 10);
    const maxArticle = this.state.articles.length - 1;

    if (button === 'back' && currentArticle > 1) {
      this.setState({
        articleKey: (currentArticle - 1).toString(),
      });
    } else if (button === 'next' && currentArticle <= maxArticle) {
      this.setState({
        articleKey: (currentArticle + 1).toString(),
      });
    }
  }

  displayBackArrow() {
    const isSmallWindowSize = window.matchMedia('screen and (max-width: 1024px)').matches;

    if (isSmallWindowSize && (this.state.articleOpen || this.state.projectOpen)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header
              toggleMobileMenu={this.toggleMobileMenu}
              displayBackArrow={this.displayBackArrow}
              /* setProjectState={ this.setProjectState }
              setArticleState={ this.setArticleState } */
            />
            <div id="body-shadow" onClick={this.toggleMobileMenu} role="none" />
            {
              this.state.projectOpen && <OpenProject
                project={this.state.projectKey}
                setProjectState={this.setProjectState}
              />
            }
            {
              this.state.articleOpen && <OpenArticle
                article={this.state.articleKey}
                articleArray={this.state.articles}
                setArticleState={this.setArticleState}
                navigateArticles={this.navigateArticles}
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
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
