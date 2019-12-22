import React, { Component, MouseEvent } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavLogo.less';

interface IProps {
  toggleMobileMenu: (event: React.MouseEvent) => void;
  setArticleState: () => void;
  setProjectState: () => void;
}

class NavLogo extends Component <IProps, {}> {
  handleClick = (event: MouseEvent): void => {
    this.props.toggleMobileMenu(event);

    /* For cases when Menu is closed but Article or Project are open */
    this.props.setArticleState();
    this.props.setProjectState();
  }

  render() {
    return (
      <Link
        to="/#home"
        className="logo-button logom"
        onClick={this.handleClick}
      />
    );
  }
}

export default NavLogo;
