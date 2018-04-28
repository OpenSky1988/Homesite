import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavLogo.css';

class NavLogo extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.getAttribute('dataValue'));
        console.log(this.props.changePage);
        console.log(e.target);
        console.log(e.target.getAttribute('dataValue'));
    }

    render() {
        return (
            <Link
                to="/home#home"
                className="logo-button logom" 
                dataValue="main" 
                onClick={ this.handlePageChange }></Link> 
        );
    }
}

export default NavLogo;