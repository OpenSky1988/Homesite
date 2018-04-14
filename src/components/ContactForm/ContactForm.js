import React, {Component} from 'react';
import './ContactForm.css';

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            name: "",
            phone: "",
            text: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`${this.state.email} <br/> ${this.state.name} <br/> ${this.state.phone} <br/> ${this.state.text}`);
        this.setState = {
            email: "",
            name: "",
            phone: "",
            text: ""
        };
    }
    
    render() {
        return (
            <div className="col-md-6">
                <form 
                    onSubmit={ this.handleSubmit }
                    className="form-inline">
                    <input
                        onChange={ this.handleInputChange }
                        value={ this.state.email }
                        className="forms"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={ this.handleInputChange }
                        value={ this.state.name }
                        className="forms" 
                        id="name"
                        name="name"
                        type="text" 
                        placeholder="Name"
                    />
                    <input
                        onChange={ this.handleInputChange }
                        value={ this.state.phone }
                        className="forms" 
                        id="phone"
                        name="phone"
                        type="text" 
                        placeholder="Phone"
                    />
                    <textarea
                        onChange={ this.handleInputChange }
                        value={ this.state.text }
                        id="text" 
                        name="text" 
                        placeholder="Text"
                    ></textarea>
                    <button
                        className="btn" 
                        id="submit-btn" 
                        type="submit" 
                        name="submit"
                    >Submit</button>
                    <ul id="social-2">
                        { this.props.addLinks() }
                    </ul>
                    <div className="error-notification"></div>
                </form>
            </div>
        );
    }
}

export default ContactForm;