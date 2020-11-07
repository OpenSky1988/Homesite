import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './Projects.less';

import ProjectItem from './ProjectItem';
import { getProjectList } from '../../actions/projectActions';
import { IState } from '../../reducers/initialState';

interface IProps {
  isLoading: boolean;
  error: string;
  projectList: IProject[];
  getProjectList: () => void;
}

const ProjectList: React.FC<IProps> = ({
  isLoading,
  error,
  projectList,
  getProjectList,
}) => {
  useEffect(() => {
    getProjectList();
  }, []);

  const renderProjects = () => projectList
    .map((project) => <ProjectItem key={project._id} project={project} />);

  return (
    <section id="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-container">
          {
            isLoading
              ? <h1>Loading...</h1>
              : error
                ? error
                : renderProjects()
          }
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: IState) => ({
  error: state.project.error,
  isLoading: state.project.isLoading,
  projectList: state.project.list,
});

export default connect(mapStateToProps, {
  getProjectList,
})(ProjectList);
