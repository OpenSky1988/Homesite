import React, { Component } from 'react';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      phone: '',
      text: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const { name } = e.target;
    const { value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState = {
      email: '',
      name: '',
      phone: '',
      text: '',
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInputChange}
          value={this.state.email}
          className="forms"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.name}
          className="forms"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={this.handleInputChange}
          value={this.state.phone}
          className="forms"
          id="phone"
          name="phone"
          type="phone"
          placeholder="Phone"
        />
        <textarea
          onChange={this.handleInputChange}
          value={this.state.text}
          className="forms"
          id="text"
          name="text"
          placeholder="Your message here"
        />
        <div id="error-notification">Error note here.</div>
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
