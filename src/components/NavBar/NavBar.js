import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <ul className="nav">
        <li isactive={ "true" /*Apply certain styles on active button*/ }>
          <Link
            to="/home#home"
            className="bt">
          home</Link>
        </li>
        <li isactive={ "false" /*Apply certain styles on active button*/ }>
          <Link
            to="/home#services"
            className="bt">
          services</Link>
        </li>
        <li isactive={ "false" /*Apply certain styles on active button*/ }>
          <Link
            to="/home#projects"
            className="bt">
          projects</Link>
        </li>
        <li isactive={ "false" /*Apply certain styles on active button*/ }>
          <Link
            to="/home#contacts"
            className="bt">
          footer</Link>
        </li>
        <li isactive={ "false" /*Apply certain styles on active button*/ }>
          <Link
            to="/blog#blog-title"
            className="blog-button">
          blog</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;