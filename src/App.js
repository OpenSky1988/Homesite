import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import DataBase from './components/DataBase';

class App extends Component {
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

    render() {
        return (
            <div className="App">
                <header>
                    <NavBar />
                </header>
                <Main
                    skillsList={ this.addServices.bind(this) }
                    addProjects={ this.addProjects.bind(this) }
                    addLinks={ this.addLinks.bind(this) }
                />
                <Footer />
            </div>
        )
    }
}

export default App;
