import React from 'react';
import PropTypes from 'prop-types';
import './Services.css';

const Services = props => (
  <section id="services">
    <div className="container">
      <h2>Services</h2>
      <div id="skill-container">
        {props.addServices()}
      </div>
    </div>
  </section>
);

Services.propTypes = {
  addServices: PropTypes.func.isRequired,
};

export default Services;
