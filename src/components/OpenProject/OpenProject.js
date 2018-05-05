import React, { Component } from 'react';
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
    return ( 
      <div className="page-wrap" onClick={ this.handleClick }>
        <div className="popup-project">
          <div className="project-image" 
            style={{ backgroundImage: `url("/img/projects/p2-4000-(900).jpg")` }}></div>
          <div className="project-header">
            <div className="project-name">Project 2</div>
            <div className="project-skills"> Responsive Desing, UX, jQuery, HTML / CSS </div>
          </div> 
          <div className="project-description"> Coming soon... </div>
          <div className="project-close-button" onClick={ this.handleClick }>Close</div > 
        </div>
      </div>
    )
  }
}

export default OpenProject;