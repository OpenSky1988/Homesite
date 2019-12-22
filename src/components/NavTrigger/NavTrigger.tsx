import React, { Component } from 'react';
import './NavTrigger.less';

interface IProps {
  toggleMobileMenu: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class NavTrigger extends Component <IProps, {}> {
  render() {
    return (
      <button
        className="nav-trigger"
        onClick={this.props.toggleMobileMenu}>
        <span />
      </button>
    );
  }
}

export default NavTrigger;
