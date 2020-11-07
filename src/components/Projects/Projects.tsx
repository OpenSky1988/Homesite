import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Projects.less';

import ProjectItem from './ProjectItem';
import { getProjectList } from '../../actions/projectActions';
import { IState } from '../../reducers/initialState';

interface IProps {
  projectList: IProject[];
  getProjectList: () => void;
}

const Projects: React.FC<IProps> = ({
  projectList,
  getProjectList,
}) => {
  useEffect(() => {
    getProjectList();
  }, []);

  const renderProjects = () => projectList
    .map((project) => <ProjectItem key={project.id} project={project} />);

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          {renderProjects()}
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: IState) => ({
  projectList: state.project.list,
});

export default connect(mapStateToProps, {
  getProjectList,
})(Projects);
