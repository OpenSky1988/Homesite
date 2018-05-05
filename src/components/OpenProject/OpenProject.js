import React, { Component } from 'react';
import DataBase from '../DataBase';

import './OpenProject.css';

class OpenProject extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) this.props.setProjectState();
  }

  render() {
    const project = DataBase.projects.find(project => project.id === this.props.project);

    return ( 
      <div className="page-wrap" onClick={ this.handleClick }>
        <div className="popup-project">
          <div className="project-image" 
            style={{ backgroundImage: `url("${project.img}")` }}></div>
          <div className="project-header">
            <div className="project-name">{ project.name }</div>
            <div className="project-skills">{ project.skills }</div>
          </div> 
          <div className="project-description">{ project.longDescription }</div>
          <div className="project-close-button" onClick={ this.handleClick }>Close</div > 
        </div>
      </div>
    )
  }
}

export default OpenProject;