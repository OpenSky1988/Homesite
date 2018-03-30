import React, {Component} from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <li className="active">
                    <a className="bt" href="#home">home</a>
                </li>
                <li>
                    <a className="bt" href="#services">services</a>
                </li>
                <li>
                    <a className="bt" href="#gallery">projects</a>
                </li>
                <li>
                    <a className="bt" href="#footer">contacts</a>
                </li>
                <li id="blog-btn">
                    <a href="/pages/blog.html">blog</a>
                </li>
            </ul>
        );
    }
}

export default NavBar;