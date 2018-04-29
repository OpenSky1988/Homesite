import React, {Component} from 'react';
import './NavTrigger.css';

class NavTrigger extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick(e) {
    const navTrigger = document.getElementById("nav-trigger");
    navTrigger.classList.toggle("is-open");


  }

  toggleMobileMenu() {
    
  }

  render() {
    return (
      <button 
        id="nav-trigger"
        onClick={this.handleClick}>
        <span></span>
      </button>
    )
  }
}

export default NavTrigger;