import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import BackArrow from '../BackArrow/BackArrow';
import NavLogo from '../NavLogo/NavLogo';
import NavBar from '../NavBar/NavBar';
import NavTrigger from '../NavTrigger/NavTrigger';
import NavMobileMenu from '../NavMobileMenu/NavMobileMenu';

class Header extends Component {
  /* constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this); 
  } */

  /* handleClick() {
    this.props.setArticleState();
    this.props.setProjectState();
  } */

  render() {
    return (
      <header id="moving-header">
        <div className="container">
          {
            this.props.displayBackArrow() && <BackArrow
              /* onClick={this.handleClick} */
            />
          }
          <NavLogo toggleMobileMenu={this.props.toggleMobileMenu} />
          <NavBar />
          <NavTrigger toggleMobileMenu={this.props.toggleMobileMenu} />
        </div>
        <NavMobileMenu toggleMobileMenu={this.props.toggleMobileMenu} />
      </header>
    );
  }
}

Header.propTypes = {
  /* setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired, */
  displayBackArrow: PropTypes.func.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default Header;
