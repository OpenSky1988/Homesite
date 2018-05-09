import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavBar.css';

const NavBar = () => (
  <ul className="nav">
    <li>
      <Link
        to="/home#home"
        className="bt"
      >
        home
      </Link>
    </li>
    <li>
      <Link
        to="/home#services"
        className="bt"
      >
        services
      </Link>
    </li>
    <li>
      <Link
        to="/home#projects"
        className="bt"
      >
        projects
      </Link>
    </li>
    <li>
      <Link
        to="/home#contacts"
        className="bt"
      >
        footer
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
