import React, {Component} from 'react';
import './NavTrigger.css';

class NavTrigger extends Component {
  render() {
    return (
      <button 
        id="nav-trigger"
        onClick={ this.props.toggleMobileMenu }>
        <span></span>
      </button>
    )
  }
}

export default NavTrigger;