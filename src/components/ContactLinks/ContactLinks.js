import React from 'react';
import PropTypes from 'prop-types';
import './ContactLinks.css';

const ContactLinks = props => (
  <div id="contact-links">
    <img
      id="contact-img"
      src="/img/home/footer_img.jpg"
      alt="Contact me here"
    />
    <ul id="social">
      { props.addLinks() }
    </ul>
  </div>
);

ContactLinks.propTypes = {
  addLinks: PropTypes.func.isRequired,
};

export default ContactLinks;
