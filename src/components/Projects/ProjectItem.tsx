import React from 'react';
import { connect } from 'react-redux';
import { setProjectState } from '../../actions/projectActions';

interface IProps {
  project: IProject;
  setProjectState: () => void;
}

const ProjectItem: React.FC<IProps> = ({
  project,
  setProjectState,
}) => (
  <div
    className="project"
    key={project.id}
    id={project.id}
    onClick={setProjectState}
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
);

export default connect(() => ({}), {
  setProjectState,
})(ProjectItem);
