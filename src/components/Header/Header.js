import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Header.css';

import toggleMobileMenu from '../../actions/menuActions';
import BackArrow from '../BackArrow/BackArrow';
import NavLogo from '../NavLogo/NavLogo';
import NavBar from '../NavBar/NavBar';
import NavTrigger from '../NavTrigger/NavTrigger';
import NavMobileMenu from '../NavMobileMenu/NavMobileMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.displayBackArrow = this.displayBackArrow.bind(this);
  }

  displayBackArrow = () => {
    const isSmallWindowSize = window.matchMedia('screen and (max-width: 1024px)').matches;
  
    if (isSmallWindowSize && (this.props.article.open || this.props.project.open)) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <header>
        <div id="moving-header">
          <div className="container">
            {
              this.displayBackArrow() && <BackArrow
                /* onClick={this.handleClick} */
              />
            }
            <NavLogo toggleMobileMenu={this.props.toggleMobileMenu} />
            <NavBar />
            <NavTrigger toggleMobileMenu={this.props.toggleMobileMenu} />
          </div>
          <NavMobileMenu toggleMobileMenu={this.props.toggleMobileMenu} />
        </div>
        <div id="body-shadow" onClick={this.props.toggleMobileMenu} role="none" />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  article: state.article,
  project: state.project,
});

Header.propTypes = {
  /* setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired, */
  toggleMobileMenu: PropTypes.func.isRequired,
  article: PropTypes.shape({
    open: PropTypes.bool.isRequired, 
    key: PropTypes.string,
  }).isRequired,
  project: PropTypes.shape({
    open: PropTypes.bool.isRequired, 
    key: PropTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps, {
  toggleMobileMenu,
})(Header);
