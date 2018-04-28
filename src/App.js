import React, { Component } from 'react';
import { 
    Route, 
    BrowserRouter as Router 
} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import DataBase from './components/DataBase';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           content: "main"
        };
    }

    handleStateChange(newPage, area) {
        let currentPage = this.state.content;
        if (newPage === currentPage) {
            if (currentPage === "main") {

            } else if (currentPage === "blog") {

            }
        }
    }

    addServices() {
        const servicesList = DataBase.skills.map(skill => {
            return (
                <div className="skill">
                    <div 
                        className="skill-icon"
                        style={{ backgroundImage: `url("${skill.img}")` }}></div>
                    <h3>{ skill.name }</h3>
                    <h4>{ skill.description }</h4>
                </div>
            );
        });

        return servicesList;
    }

    addProjects() {
        let projects = DataBase.projects.map(project => {

            return (
                <div className="project">
                    <div className="thumbnail" style={{ backgroundImage: `url("${project.img}")` }}>
                        <div className="tb">
                            <h3>{ project.name }</h3>
                            <div className="hover-description">{ project.shortDescription }</div>
                            <p>View more</p>
                        </div>
                    </div>
                    <div className="mobile-text">
                        <p>
                            <span className="proj-name">{ project.name }</span> - { project.shortDescription }</p>
                        <p>
                            <div className="project-button">View more</div>
                        </p>
                    </div>
                </div>
            );
        });

        return projects;
    }

    addLinks() {
        const links = DataBase.links.map(link => {
            return (
                <li id={ link.id }>
                    <a  href={ link.href }
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                            src={ link.img }
                            border="0"
                            alt={ link.alt }
                        />
                    </a>
                </li>
            );
        });

        return links;
    }

    addArticles() {
        const articles = DataBase.articles.map(article => {
            return (
                <div className="article-preview">
                    <div 
                        className="ap-image" 
                        id="img-1" 
                        style={{ backgroundImage: `url("${article.img}")` }}>
                    </div>
                    <div className="content">
                        <h2>{ article.header }</h2>
                        <div className="post-date">
                            <h4>{ article.date }</h4>
                        </div>
                        <p className="description">{ article.text }</p>
                        <div className="view-button">View more</div>
                    </div>
                </div>
            );
        });

        return articles;
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Header changePage={ this.handleStateChange.bind(this) } />
                        
                        <Route path="(/|/home)" render={() => <Main 
                            skillsList={this.addServices.bind(this)}
                            addProjects={this.addProjects.bind(this)}
                            addLinks={this.addLinks.bind(this)} 
                        />} />
                        <Route path="/blog" render={() => <Blog
                            addArticles={this.addArticles.bind(this)}
                        />} />
                    </div>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App;
