import React, {Component} from 'react';
import './NavLogo.css';

class NavLogo extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.value);
        console.log(this.props.changePage);
        console.log(e.target);
        console.log(e.target.value);
    }

    render() {
        return (
            <button className="logo-button">
                <div className="logom" value="main" onClick={ this.handlePageChange } ></div>
            </button> 
        );
    }
}

export default NavLogo;