import React, {Component} from 'react';
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
            <button className="logo-button logom" dataValue="main" onClick={ this.handlePageChange }></button> 
        );
    }
}

export default NavLogo;