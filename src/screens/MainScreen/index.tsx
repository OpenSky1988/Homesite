import React, { Component } from 'react';
import { connect } from 'react-redux';

import Banner from '../../components/Banner/Banner';
import Greetings from '../../components/Greetings/Greetings';
import Services from '../../components/Services/Services';
import Projects from '../../components/Projects/Projects';
import Contacts from '../../components/Contacts/Contacts';
import OpenProject from '../../components/OpenProject/OpenProject';

import DataBase from '../../components/DataBase';
import setProjectState from '../../actions/projectActions';
import { IState } from '../../reducers/initialState';
import './Main.less';

interface ICurrentProject {
  open: boolean;
  key: string;
}

interface IProps {
  project: ICurrentProject;
  setProjectState: () => void;
}

class MainScreen extends Component <IProps, {}> {
  addServices = () => {
    const servicesList = DataBase.skills.map((skill) => (
      <div
        className="skill"
        key={skill.id}>
        <div
          className="skill-icon"
          style={{ backgroundImage: `url("${skill.img}")` }}
        />
        <h3>{skill.name}</h3>
        <h4>{skill.description}</h4>
      </div>
    ));

    return servicesList;
  }

  addLinks = () => {
    const links = DataBase.links.map((link) => (
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
            // border="0"
            alt={link.alt}
          />
        </a>
      </li>
    ));

    return links;
  }

  addProjects = () => {
    const projects = DataBase.projects.map((project) => (
      <div
        className="project"
        key={project.id}
        id={project.id}
        onClick={this.props.setProjectState}
        role="none"
      >
        <div className="thumbnail" style={{ backgroundImage: `url("${project.img}")` }}>
          <div className="tb">
            <h3>{project.name}</h3>
            <div className="hover-description">{project.shortDescription}</div>
            <p>View more</p>
          </div>
        </div>
        <div className="mobile-text">
          <div>
            <span className="proj-name">{project.name}</span> - {project.shortDescription}
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

const mapStateToProps = (state: IState) => ({
  project: state.project,
});

export default connect(mapStateToProps, {
  setProjectState,
})(MainScreen);
