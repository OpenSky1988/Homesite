import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import './Projects.less';

import ProjectItem from './ProjectItem';
import Modal from '../Modal';
import OpenProject from '../OpenProject';
import { getProjectList, setProjectState } from '../../actions/projectActions';
import { IState } from '../../reducers/initialState';

interface IProps {
  isLoading: boolean;
  error: string;
  project: IListItemState;
  projectList: IProject[];
  getProjectList: () => void;
  setProjectState: () => void;
}

const ProjectList: React.FC<IProps> = ({
  isLoading,
  error,
  project,
  projectList,
  getProjectList,
  setProjectState,
}) => {
  const {t} = useTranslation();

  useEffect(() => {
    getProjectList();
  }, []);

  const renderProjects = () => projectList
    .map((project) => <ProjectItem key={project._id} project={project} />);

  const handleClose = (event: MouseEvent) => {
    event.preventDefault();
    if (event.target === event.currentTarget) { setProjectState(); }
  };

  return (
    <>
      <section id="projects">
        <div className="container">
          <h2>{t('MainScreen.Projects.Title')}</h2>
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
      <Modal open={project.open} handleClose={handleClose}>
        <OpenProject projectId={project.key} />
      </Modal>
    </>
  );
};

const mapStateToProps = (state: IState) => ({
  error: state.project.error,
  isLoading: state.project.isLoading,
  project: state.project.item,
  projectList: state.project.list,
});

export default connect(mapStateToProps, {
  getProjectList,
  setProjectState,
})(ProjectList);
