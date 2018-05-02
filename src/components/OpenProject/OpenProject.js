import React, { Component } from 'react';

class OpenProject extends Component {
  render() {
    return ( 
      <div className = "project-wrap">
        <div className = "popup-project" >
          <div className = "project-image" 
            style = {{ backgroundImage: `url(/img/projects/p2-4000-(900).jpg)` }}></div>
          <div className="project-header">
            <div className="project-name">Project 2</div>
            <div className = "project-skills"> Responsive Desing, UX, jQuery, HTML / CSS </div>
          </div> 
          <div className = "project-description" > Coming soon... </div>
          <div className="project-close-button">Close</div > 
        </div>
      </div>
    )
  }
}

export default OpenProject;