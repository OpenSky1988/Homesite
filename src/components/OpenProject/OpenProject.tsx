import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setProjectState,
} from '../../actions/projectActions';
import StaticData from '../StaticData';

import './OpenProject.less';

interface IProps {
  project: string;
  setProjectState: () => void;
}

class OpenProject extends Component <IProps, {}> {
  private handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    if (event.target === event.currentTarget) { this.props.setProjectState(); }
  }

  public render() {
    const project: IProject | undefined = StaticData.projects.find((currentProject) => (
      currentProject.id === this.props.project
    ));

    return (
      <div className="page-wrap" onClick={this.handleClick} role="none">
        <div className="popup-project">
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
              onClick={this.handleClick}
              role="none"
            >Close</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => ({}), {
  setProjectState,
})(OpenProject);
