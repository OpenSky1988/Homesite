import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import './NavLogo.css';

const NavLogo = props => (
  <Link
    to="/home#home"
    className="logo-button logom"
    onClick={props.toggleMobileMenu} 
  />
);

NavLogo.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
}

export default NavLogo;
