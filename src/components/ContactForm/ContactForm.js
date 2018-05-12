import React, { Component } from 'react';
import validator from 'validator';

import './ContactForm.css';

import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';

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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(e) {
    e.preventDefault();

    const isError = this.validateForm();
    if (!isError) {
      this.setState({
        ...this.state,
        data: {
          email: "",
          name: "",
          phone: "",
          text: "",
        }
      });
    }
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
