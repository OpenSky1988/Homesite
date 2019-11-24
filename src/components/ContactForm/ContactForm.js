import emailjs from 'emailjs-com';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import './ContactForm.css';

import { updateContactForm, clearContactForm } from '../../actions/contactFormActions';
import updateError from '../../actions/errorActions';
import toggleMessageLoader from '../../actions/messageLoaderActions';
import toggleMessageSuccessBlock from '../../actions/messageSuccessBlockActions';

import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import privateConfig from '../../privateConfig';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    emailjs.init(privateConfig.emailJS.userKey);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const { isLoading, updateContactForm } = this.props;
    
    if (!isLoading) {
      new Promise((resolve, _reject) => {
        resolve(updateContactForm(name, value));
      }).then(() => {
        this.validateForm();
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
      contactForm: { email, name, text },
      isLoading,
      error,
      toggleMessageLoader
    } = this.props;

    const isFormEmpty = (
      validator.isEmpty(email) &&
      validator.isEmpty(name) &&
      validator.isEmpty(text)
    );

    if (!isLoading && !isFormEmpty && !error) {
      toggleMessageLoader(true);
      this.sendEmail();
      this.disableFormElements(true);
    }
  }

  showMessageSuccessBlock = () => {
    this.props.toggleMessageSuccessBlock(true);
  }

  sendEmail = async () => {
    const {
      contactForm: { email, name, phone, text },
      clearContactForm,
      toggleMessageLoader
    } = this.props;

    await emailjs.send(
      'gmail',
      privateConfig.emailJS.template,
      {
        message_html: text,
        from_name: name, 
        reply_to: email,
        phone
      }
    ).then(_res => {
      console.log('EmailJS: Email successfully sent!');
      clearContactForm();
    }).catch(err => {
      console.warn(`EmailJS: Error while sending email: ${JSON.stringify(err, null, '  ')}`);
    });
    
    toggleMessageLoader(false);
    this.disableFormElements(false);
    // Animate message success appearance
    this.showMessageSuccessBlock();
  }

  switchClass = (element, targetClass, add) => {
    if (add) {
      const newClass = (element.className.length === 0)
        ? targetClass
        : ` ${targetClass}`;

      element.className += newClass;
    } else {
      const oldClass = element.className.replace(
        new RegExp('\\b' + targetClass + '\\b'),
        ''
      );
      
      element.className = oldClass;
    }
  }

  disableFormElements = (value) => {
    const formInputs = document.getElementsByTagName("input");
    const formTextArea = document.getElementsByTagName("textarea")[0];
    const submitBtn = document.getElementById("submit-btn");
    
    submitBtn.innerText = value ? "Sending..." : "Submit";
    this.switchClass(submitBtn, "disabled-btn", value);

    formTextArea.disabled = value;
    this.switchClass(formTextArea, 'disabled-input', value);

    Array.prototype.forEach.call(formInputs, input => {
      input.disabled = value;
      this.switchClass(input, 'disabled-input', value);
    });
  }

  validateForm = () => {
    const { contactForm: {email, name, phone, text}, updateError } = this.props;

    if (email && validator.isEmpty(email)) { updateError('Email is required'); }
    else if (email && !validator.isEmail(email)) { updateError('Proper email format: username@example.com'); }
    else if (name && validator.isEmpty(name)) { updateError('Please enter your name'); }
    else if (phone && !validator.isMobilePhone(phone, 'any')) { updateError('Please enter correct phone number'); }
    else if (text && validator.isEmpty(text)) { updateError('Please enter your text'); }
    else if (email && email.length > 500) { updateError('Message is too long (max: 500 sym)'); }
    else { updateError(''); }
  }

  render() {
    const { contactForm: {email, name, phone, text}, error } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={email}
          className="forms"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={this.onChange}
          value={name}
          className="forms"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={this.onChange}
          value={phone}
          className="forms"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone (global format)"
        />
        <textarea
          onChange={this.onChange}
          value={text}
          className="forms"
          id="text"
          name="text"
          placeholder="Your message here"
        />
        { error && <ErrorDisplay error={error} /> }
        <button
          className="btn"
          id="submit-btn"
          type="submit"
          name="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contactForm: state.contactForm,
  error: state.error,
  isLoading: state.isLoading,
});

const dispatchStateToProps = {
  updateContactForm,
  clearContactForm,
  updateError,
  toggleMessageLoader,
  toggleMessageSuccessBlock,
};

export default connect(mapStateToProps, dispatchStateToProps)(ContactForm);
