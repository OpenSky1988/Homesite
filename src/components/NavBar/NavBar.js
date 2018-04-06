import React, {Component} from 'react';
import './NavBar.css';

/*import NavItem from '../NavItem/NavItem';*/

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(e) {
        this.props.changePage(e.target.value);
    }

    render() {
        return (
            <ul className="nav">
                {/*<NavItem 
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
                    buttonType = "blog"
                    page = "blog"
                    changePage = {this.props.changePage}
                    itemName="blog" 
                />*/}
                <li className="active">
                    <button
                        className="bt" 
                        value="main" 
                        href="#home"
                        onClick={this.handlePageChange}>
                    home</button>
                </li>
                <li className="inactive">
                    <button
                        className="bt" 
                        value="main" 
                        href="#services"
                        onClick={this.handlePageChange}>
                    services</button>
                </li>
                <li>
                    <button
                        className="bt" 
                        value="main" 
                        href="#gallery"
                        onClick={this.handlePageChange}>
                    projects</button>
                </li>
                <li>
                    <button
                        className="bt" 
                        value="main" 
                        href="#footer"
                        onClick={this.handlePageChange}>
                    contacts</button>
                </li>
                <li id="blog-btn">
                    <button 
                        className="blog"
                        value="blog"
                        onClick={this.handlePageChange}>
                    blog</button>
                </li>
            </ul>
        );
    }
}

export default NavBar;