import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

import BackArrow from '../BackArrow/BackArrow';
import NavLogo from '../NavLogo/NavLogo';
import NavBar from '../NavBar/NavBar';
import NavTrigger from '../NavTrigger/NavTrigger';
import NavMobileMenu from '../NavMobileMenu/NavMobileMenu';

const Header = props => (
  <header id="moving-header">
    <div className="container">
      {
        props.displayBackArrow() && <BackArrow
          /* onClick={this.handleClick} */
        />
      }
      <NavLogo toggleMobileMenu={props.toggleMobileMenu} />
      <NavBar />
      <NavTrigger toggleMobileMenu={props.toggleMobileMenu} />
    </div>
    <NavMobileMenu toggleMobileMenu={props.toggleMobileMenu} />
  </header>
);

Header.propTypes = {
  /* setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired, */
  displayBackArrow: PropTypes.func.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
  
};

export default Header;
