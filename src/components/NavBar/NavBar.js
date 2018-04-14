import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        let page = e.target.getAttribute('page');
        let area = e.target.getAttribute('href');

        this.props.changePage(page, area);
    }

    render() {
        return (
            <ul className="nav">
                <li isActive={ true /*Apply certain styles on active button*/}>
                    <Link
                        to="/home"
                        className="bt" 
                        page="main"
                        href="#home"
                        onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
                    home</Link>
                </li>
                <li isActive={ false /*Apply certain styles on active button*/}>
                    <Link
                        to="/home"
                        className="bt" 
                        page="main"
                        href="#services"
                        onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
                    services</Link>
                </li>
                <li isActive={ false /*Apply certain styles on active button*/}>
                    <Link
                        to="/home"
                        className="bt" 
                        page="main"
                        href="#projects"
                        onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
                    projects</Link>
                </li>
                <li isActive={ false /*Apply certain styles on active button*/}>
                    <Link
                        to="/home"
                        className="bt" 
                        page="main"
                        href="#footer"
                        onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
                    footer</Link>
                </li>
                <li isActive={ false /*Apply certain styles on active button*/}>
                    <Link
                        to="/blog"
                        className="blog-button" 
                        page="blog"
                        href="#blog"
                        onClick={ this.handlePageChange /*For all buttons - handles change of page*/}>
                    blog</Link>
                </li>
            </ul>
        );
    }
}

export default NavBar;