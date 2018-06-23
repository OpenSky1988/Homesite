import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataBase from '../DataBase';

import './OpenProject.css';

class OpenProject extends Component {
  handleClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) this.props.setProjectState();
  }

  render() {
    const project = DataBase.projects.find(currentProject => (
      currentProject.id === this.props.project
    ));

    return (
      <div className="page-wrap" onClick={this.handleClick} role="none">
        <div className="popup-project">
          <div
            className="project-image"
            style={{ backgroundImage: `url("${project.img}")` }} 
          />
          <div className="project-header">
            <div className="project-name">{project.name}</div>
            <div className="project-skills">{project.skills}</div>
          </div>
          <div className="project-description">
            <pre>
              {project.longDescription}
            </pre>
          </div>
          <div className="project-close-button" onClick={this.handleClick} role="button">Close</div>
        </div>
      </div>
    );
  }
}

OpenProject.propTypes = {
  setProjectState: PropTypes.func.isRequired,
  project: PropTypes.string.isRequired,
};

export default OpenProject;
