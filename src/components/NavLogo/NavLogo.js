import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavLogo.css';

class NavLogo extends Component {
    render() {
        return (
            <Link
                to="/home#home"
                className="logo-button logom" 
                onClick={ this.props.toggleMobileMenu }></Link> 
        );
    }
}

export default NavLogo;