import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Contacts.css';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';
import MailSentOverlay from '../MailSentOverlay/MailSentOverlay';

const Contacts = props => (
  <section id="contacts">
    <div className="container">
      <h3 id="contacts-header">Want to make something together?</h3>
      <div id="contacts-row">
      
        { props.isSuccessBlockShown ?
          <MailSentOverlay /> :
          <ContactForm />
        }
        <ContactLinks addLinks={props.addLinks} />
      </div>
    </div>
  </section>
);

Contacts.propTypes = {
  addLinks: PropTypes.func.isRequired,
  isSuccessBlockShown: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isSuccessBlockShown: state.isSuccessBlockShown
});

export default connect(mapStateToProps, {})(Contacts);
