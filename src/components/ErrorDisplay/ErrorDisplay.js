import React from 'react'
import PropTypes from 'prop-types'

import './ErrorDisplay.css';

const ErrorDisplay = props => (
  <div id="error-notification">
    { props.error }
  </div>
);

ErrorDisplay.propTypes = {
  error: PropTypes.string.isRequired,
}

export default ErrorDisplay;
