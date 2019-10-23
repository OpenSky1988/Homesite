import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

import OpenProject from '../OpenProject/OpenProject';

import setProjectState from '../../actions/projectActions';
import DataBase from '../DataBase';

class Main extends Component {
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

  render() {
    return (
      <main>
        {
          this.props.project.open && <OpenProject
            project={this.props.project.key}
            setProjectState={this.props.setProjectState}
          />
        }
        <Banner />
        <Greetings />
        <Services addServices={this.addServices} />
        <Projects addProjects={this.addProjects} />
        <Contacts addLinks={this.addLinks} />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project,
});

Main.propTypes = {
  setProjectState: PropTypes.func.isRequired,
  project: PropTypes.shape({
    open: PropTypes.bool.isRequired, 
    key: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, {
  setProjectState,
})(Main);
