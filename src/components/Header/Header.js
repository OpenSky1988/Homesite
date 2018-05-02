import React, {Component} from 'react';
import './Header.css';

import BackArrow from '../BackArrow/BackArrow';
import NavLogo from '../NavLogo/NavLogo';
import NavBar from '../NavBar/NavBar';
import NavTrigger from '../NavTrigger/NavTrigger';
import NavMobileMenu from '../NavMobileMenu/NavMobileMenu';

class Header extends Component {
  render() {
    return (
      <header id="moving-header">
        <div className="container">
          <BackArrow />
          <NavLogo toggleMobileMenu={ this.props.toggleMobileMenu } />
          <NavBar />
          <NavTrigger toggleMobileMenu={ this.props.toggleMobileMenu } />
        </div>
        <NavMobileMenu toggleMobileMenu={ this.props.toggleMobileMenu } />
      </header>
    )
  }
}

export default Header;