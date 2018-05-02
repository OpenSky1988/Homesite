import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavMobileMenu.css';

class NavMobileMenu extends Component {
  render() {
    return (
      <div id="mobile-nav">
        <div className="container">
          <ul>
            <li isactive={ "true" /*Apply certain styles on active button*/}>
              <Link
                to="/home#home"
                className="bt"
                onClick={ this.props.toggleMobileMenu }>
              home</Link>
            </li>
            <li isactive={ "false" /*Apply certain styles on active button*/}>
              <Link
                to="/home#services"
                className="bt"
                onClick={ this.props.toggleMobileMenu }>
              services</Link>
            </li>
            <li isactive={ "false" /*Apply certain styles on active button*/}>
              <Link
                to="/home#projects"
                className="bt"
                onClick={ this.props.toggleMobileMenu }>
              projects</Link>
            </li>
            <li isactive={ "false" /*Apply certain styles on active button*/}>
              <Link
                to="/home#contacts"
                className="bt"
                onClick={ this.props.toggleMobileMenu }>
              footer</Link>
            </li>
            <li id="mobile-blog-btn"
                isactive={ "false" /*Apply certain styles on active button*/}>
              <Link
                to="/blog#blog-title"
                onClick={ this.props.toggleMobileMenu }>
              blog</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavMobileMenu;