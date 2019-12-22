import React, { Component } from 'react';
import './BackArrow.less';

interface IProps {
  setArticleState: (event?: MouseEvent) => void;
  setProjectState: (event?: MouseEvent) => void;
}

class BackArrow extends Component <IProps, {}> {
  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    this.props.setArticleState();
    this.props.setProjectState();
  }

  render() {
    return (
      <div className="back-arrow" onClick={this.handleClick} role="none">
        <div className="arrow" />
      </div>
    );
  }
}

export default BackArrow;
