import React, {Component} from 'react';
import './NavLogo.css';

class NavLogo extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.value);
        console.log(e.target);
        console.log(e.target.value);
        console.log(this.props.changePage);
    }

    render() {
        return (
            <button className="logo-button" value="main">
                <div className="logom" value="main" onClick={ this.handlePageChange.bind(this) }></div>
            </button> 
        );
    }
}

export default NavLogo;