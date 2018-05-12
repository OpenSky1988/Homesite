/* global document */
/* global window */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.setProjectState = this.setProjectState.bind(this);
    this.setArticleState = this.setArticleState.bind(this);

    this.navigateArticles = this.navigateArticles.bind(this);
    this.displayBackArrow = this.displayBackArrow.bind(this);
  }

  componentWillMount = () => {
    this.setState({ articles: DataBase.articles });
  }

  setProjectState = (e) => {
    const body = document.getElementById('body');
    if (this.state.project.open) {
      this.setState({
        project: {
          open: false,
          key: null,
        },
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        project: {
          open: true,
          key: e.currentTarget.id,
        },
      });
      body.classList.add('body-overflow');
    }
  }

  setArticleState = (e) => {
    const body = document.getElementById('body');

    if (this.state.article.open) {
      this.setState({
        article: {
          open: false,
          key: null,
        },
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        article: {
          open: true,
          key: e.currentTarget.id,
        },
      });
      body.classList.add('body-overflow');
    }
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
        onClick={this.setProjectState}
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
    const articles = this.state.articles.map(article => (
      <div
        className="article"
        key={article.id}
        id={article.id}
        onClick={this.setArticleState}
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

  toggleMobileMenu = (e) => {
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

    if (isSmallWindowSize && (this.state.article.open || this.state.project.open)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header
            toggleMobileMenu={this.toggleMobileMenu}
            displayBackArrow={this.displayBackArrow}
            /* setProjectState={ this.setProjectState }
            setArticleState={ this.setArticleState } */
          />
          <div id="body-shadow" onClick={this.toggleMobileMenu} role="none" />
          {
            this.state.project.open && <OpenProject
              project={this.state.project.key}
              setProjectState={this.setProjectState}
            />
          }
          {
            this.state.article.open && <OpenArticle
              article={this.state.article.key}
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
        <Footer />
      </div>
    );
  }
}

export default App;
