import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavMobileMenu.css';

class NavMobileMenu extends Component {
  render() {
    return (
      <div className="mobile-nav">
        <div className="container">
          <ul>
            <li isActive={ true /*Apply certain styles on active button*/}>
              <Link
                to="/home#home"
                className="bt">
              home</Link>
            </li>
            <li isActive={ false /*Apply certain styles on active button*/}>
              <Link
                to="/home#services"
                className="bt">
              services</Link>
            </li>
            <li isActive={ false /*Apply certain styles on active button*/}>
              <Link
                to="/home#projects"
                className="bt">
              projects</Link>
            </li>
            <li isActive={ false /*Apply certain styles on active button*/}>
              <Link
                to="/home#contacts"
                className="bt">
              footer</Link>
            </li>
            <li id="mobile-blog-btn"
                isActive={ false /*Apply certain styles on active button*/}>
              <Link
                to="/blog#blog-title">
              blog<div className="page-img"></div></Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavMobileMenu;