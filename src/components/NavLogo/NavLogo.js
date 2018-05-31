import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './NavLogo.css';

class NavLogo extends Component { 
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.toggleMobileMenu(e);

    /* For cases when Menu is closed but Article or Project are open */
    this.props.setArticleState(); 
    this.props.setProjectState();
  }

  render() {
    return (
      <Link
        to="/home#home"
        className="logo-button logom"
        onClick={this.handleClick} 
      />
    );
  }
}

NavLogo.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
  setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired,
}

export default NavLogo;
