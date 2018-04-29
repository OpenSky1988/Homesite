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
                    <NavLogo changePage={ this.props.changePage } />
                    <NavBar changePage={ this.props.changePage } />
                    <NavTrigger />
                </div>
                <NavMobileMenu />
                <div class="body-shadow"></div>
            </header>
        )
    }
}

export default Header;