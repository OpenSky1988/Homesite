import React, {Component} from 'react';
import './NavBar.css';

import NavItem from '../NavItem/NavItem';

class NavBar extends Component {
    render() {
        return (
            <ul className="nav">
                <NavItem 
                    isActive = {true}
                    buttonType = "bt"
                    page = "main"
                    area = "#home"
                    changePage = {this.props.changePage}
                    itemName="home" 
                />
                <NavItem 
                    isActive = {false}
                    buttonType = "bt"
                    page = "main"
                    area = "#services"
                    changePage = {this.props.changePage}
                    itemName="services" 
                />
                <NavItem 
                    isActive = {false}
                    buttonType = "bt"
                    page = "main"
                    area = "#gallery" 
                    changePage = {this.props.changePage}
                    itemName="projects" 
                />
                <NavItem 
                    isActive = {false}
                    buttonType = "bt"
                    page = "main"
                    area = "#footer" 
                    changePage = {this.props.changePage}
                    itemName="contacts" 
                />
                <NavItem 
                    isActive = {false}
                    buttonType = "blog-button"
                    page = "blog"
                    changePage = {this.props.changePage}
                    itemName="blog" 
                />
            </ul>
        );
    }
}

export default NavBar;