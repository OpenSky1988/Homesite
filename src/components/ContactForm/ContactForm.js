import emailjs from 'emailjs-com';
import React, { Component } from 'react';
import validator from 'validator';

import './ContactForm.css';

import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import privateConfig from '../../privateConfig';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: "",
        name: "",
        phone: "",
        text: "",
      },
      error: "",
      loading: false,
    };

    emailjs.init(privateConfig.emailJS.userKey);
  }

  onChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [name]: value,
      },
    });

    this.validateForm();
  }

  onSubmit = (e) => {
    e.preventDefault();
    const isError = this.validateForm();

    if (!isError) {
      this.sendEmail();
      this.clearEmailForm();
    }
  }

  sendEmail = async () => {
    await emailjs.send(
      'gmail',
      privateConfig.emailJS.template,
      {
        message_html: this.state.text,
        from_name: this.state.name, 
        reply_to: this.state.email
      }
    ).then(_res => {
      console.log('EmailJS: Email successfully sent!');
    }).catch(err => {
      console.log(`EmailJS: Error while sending email: ${JSON.stringify(err, null, '  ')}`);
    })
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
    const { data } = this.state;

    if (validator.isEmpty(data.email)) this.setState({ error: 'Email is required' })
    else if (!validator.isEmail(data.email)) this.setState({ error: 'Proper email format: usernamee@example.com' })
    else if (validator.isEmpty(data.name)) this.setState({ error: 'Please enter your name' })
    else if (data.phone && !validator.isMobilePhone(data.phone, 'any')) this.setState({ error: 'Please enter correct phone number' })
    else if (validator.isEmpty(data.text)) this.setState({ error: 'Please enter your text' })
    else if (data.email.length > 500) this.setState({ error: 'Message is too long (max: 500 sym)' });
  }

  render() {
    const { data } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          onChange={this.onChange}
          value={data.email}
          className="forms"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={this.onChange}
          value={data.name}
          className="forms"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={this.onChange}
          value={data.phone}
          className="forms"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone (global format)"
        />
        <textarea
          onChange={this.onChange}
          value={data.text}
          className="forms"
          id="text"
          name="text"
          placeholder="Your message here"
        />
        { this.state.error && <ErrorDisplay error={ this.state.error } /> }
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

export default ContactForm;
