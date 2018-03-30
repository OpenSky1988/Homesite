import React, {Component} from React;
import './Header.css';

import NavBar from '../Navbar/Navbar';
import NavTrigger from '../NavTrigger/NavTrigger';
import BackArrow from '../BackArrow/BackArrow';

class Header extends Component {
    render() {
        return (
            <header id="moving-header">
                <div className="container">
                    <BackArrow />
                    <a href="/index.html">
                        <div id="logom"></div>
                    </a>
                    <NavBar />
                    <NavTrigger />
                </div>
            </header>
        )
    }
}

export default Header;