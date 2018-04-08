import React, {Component} from 'react';
import './NavLogo.css';

class NavLogo extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.value);
    }

    render() {
        return (
            <button 
                id="logo-button" 
                value="main" 
                onClick={ this.handlePageChange }>
                <div id="logom"></div>
            </button> 
        )
    }
}

export default NavLogo;