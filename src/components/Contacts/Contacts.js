import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';

const Contacts = props => (
  <section id="contacts">
    <div className="container">
      <h3 id="contacts-header">Want to make something together?</h3>
      <div id="contacts-row">
        <ContactForm />
        <ContactLinks addLinks={props.addLinks} />
      </div>
    </div>
  </section>
);

Contacts.propTypes = {
  addLinks: PropTypes.func.isRequired,
};

export default Contacts;
