import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BackArrow.css';

class BackArrow extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) { // This doesn't happen for some reason
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
