import React, {Component} from 'react';
import './ContactLinks.css';

class ContactLinks extends Component {
    render() {
        return (
            <div id="contact-links">
                <img
                    id="contact-img" 
                    src="/img/home/footer_img.jpg" 
                    alt="Contact me here"
                />
                <ul id="social">
                    { this.props.addLinks() }
                </ul>
            </div>
        );
    }
}

export default ContactLinks;