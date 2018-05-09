import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

const Projects = props => (
  <section id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div id="projects-container">
        {props.addProjects()}
      </div>
    </div>
  </section>
);

Projects.propTypes = {
  addProjects: PropTypes.func.isRequired,
};

export default Projects;
