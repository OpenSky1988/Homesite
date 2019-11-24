import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'; // Doesn't work with Redux

import './NavBar.css';

const NavBar = () => (
  <ul className="nav">
    <li>
      <Link
        to="/#home"
        className="bt"
      >
        home
      </Link>
    </li>
    <li>
      <Link
        to="/#services"
        className="bt"
      >
        services
      </Link>
    </li>
    <li>
      <Link
        to="/#projects"
        className="bt"
      >
        projects
      </Link>
    </li>
    <li>
      <Link
        to="/#contacts"
        className="bt"
      >
        contacts
      </Link>
    </li>
    <li>
      <Link
        to="/blog#blog-title"
        className="blog-button"
      >
        blog
      </Link>
    </li>
  </ul>
);

export default NavBar;
