import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
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

    changePage(pageName) {
        this.setState({
            content:pageName
        });
    }

    addContent() {
        if (this.state.content === "main") {
            return(
                <Main
                    skillsList={ this.addServices.bind(this) }
                    addProjects={ this.addProjects.bind(this) }
                    addLinks={ this.addLinks.bind(this) }
                />
            );
        } else if (this.state.content === "blog") {
            return (
                <Blog
                    addArticles={ this.addArticles.bind(this) }
                />
            );
        } else {
            console.log("Reference error: Invalid page.");
        };
    }

    addServices() {
        const servicesList = DataBase.skills.map(skill => {
            return (
                <div className="col-md-4">
                    <div className="icon"></div>
                    <h2>{ skill.name }</h2>
                    <h4>{ skill.description }</h4>
                </div>
            );
        });

        return servicesList;
    }

    addProjects() {
        var projects = DataBase.projects.map(project => {
            return (
                <div className="project">
                    <div className="thumbnail" id="p1">
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
                <li>
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
                <div className="article-prev" id="a1">
                    <div 
                        className="ap-image" 
                        id="img-1" 
                        style={{ backgroundImage: "src(" + article.img + ")" }}>
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
                <header>
                    <NavBar changePage={ this.changePage.bind(this) } />
                </header>
                { this.addContent() /*returns Main or Blog component*/ }
                <Footer />
            </div>
        )
    }
}

export default App;
