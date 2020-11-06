import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setProjectState } from '../../actions/projectActions';
import Public from '../../api/public';

import './OpenProject.less';

interface IProps {
  projectId: string;
  setProjectState: () => void;
}

const OpenProject: React.FC<IProps> = ({
  projectId,
  setProjectState,
}) => {
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [project, setProject] = useState({
    img: '',
    longDescription: '',
    name: '',
    skills: '',
  });

  useEffect(() => {
    (async function openProjectDidMountIIFE() {
      await getProject();
    })();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) { setProjectState(); }
  };

  const getProject = async () => {
    setLoading(true);
    try {
      const response = await Public.getProject(projectId);
      const currentProject = response?.data?.data;
      setProject(currentProject);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return isLoading
    ? <h1>Loading...</h1>
    : error
      ? <>{error}</>
      : (
        <>
          <div
            className="project-image"
            style={{ backgroundImage: `url("${project?.img}")` }}
          />
          <div className="project-header">
            <div className="project-name">{project?.name}</div>
            <div className="project-skills">{project?.skills}</div>
          </div>
          <div className="project-description">
            <pre>
              {project?.longDescription}
            </pre>
          </div>
          <div className="close-button-container">
            <div
              className="project-close-button"
              onClick={handleClick}
              role="none"
            >Close</div>
          </div>
        </>
      );
};

export default connect(() => ({}), {
  setProjectState,
})(OpenProject);
