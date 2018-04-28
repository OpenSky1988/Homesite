import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handlePageChange = this.handlePageChange.bind(this);
}

  handlePageChange(e) {
    let page = e.target.getAttribute('page');
    let area = e.target.getAttribute('href');

    this.props.changePage(page, area);
  }

  render() {
    return (
      <ul className="nav">
        <li isActive={ true /*Apply certain styles on active button*/}>
          <Link
            to="/home#home"
            className="bt" 
            onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
          home</Link>
        </li>
        <li isActive={ false /*Apply certain styles on active button*/}>
          <Link
            to="/home#services"
            className="bt" 
            onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
          services</Link>
        </li>
        <li isActive={ false /*Apply certain styles on active button*/}>
          <Link
            to="/home#projects"
            className="bt" 
            onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
          projects</Link>
        </li>
        <li isActive={ false /*Apply certain styles on active button*/}>
          <Link
            to="/home#contacts"
            className="bt" 
            onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
          footer</Link>
        </li>
        <li isActive={ false /*Apply certain styles on active button*/}>
          <Link
            to="/blog#blog-title"
            className="blog-button" 
            onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
          blog</Link>
        </li>
      </ul>
    );
  }
}

export default NavBar;