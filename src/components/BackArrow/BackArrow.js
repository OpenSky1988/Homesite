import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackArrow.css';

class BackArrow extends Component {
  handleClick = (e) => {
    e.preventDefault();
    
    this.props.setArticleState();
    this.props.setProjectState();
  }

  render() {
    return (
      <div id="back-arrow" onClick={this.handleClick} role="none">
        <div className="arrow" />
      </div>
    );
  }
}

BackArrow.propTypes = {
  setArticleState: PropTypes.func.isRequired,
  setProjectState: PropTypes.func.isRequired, 
};

export default BackArrow;
