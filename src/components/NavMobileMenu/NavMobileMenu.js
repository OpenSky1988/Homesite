import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import './NavMobileMenu.css';

const NavMobileMenu = props => (
  <div id="mobile-nav">
    <div className="container">
      <ul>
        <li>
          <Link
            to="/home#home"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/home#services"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            services
          </Link>
        </li>
        <li>
          <Link
            to="/home#projects"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            to="/home#contacts"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            footer
          </Link>
        </li>
        <li id="mobile-blog-btn">
          <Link
            to="/blog#blog-title"
            onClick={props.toggleMobileMenu}
          >
            blog
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

NavMobileMenu.propTypes = {
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default NavMobileMenu;
