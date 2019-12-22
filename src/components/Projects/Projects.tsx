import React from 'react';
import './Projects.less';

interface IProps {
  addProjects: () => JSX.Element[];
}

const Projects: React.FC<IProps> = (props) => (
  <section id="projects">
    <div className="container">
      <h2>Projects</h2>
      <div className="projects-container">
        {props.addProjects()}
      </div>
    </div>
  </section>
);

export default Projects;
