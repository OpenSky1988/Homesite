import React, {Component} from 'react';
import './ContactLinks.css';

class ContactLinks extends Component {
    render() {
        return (
            <div className="col-md-2 col-md-offset-2">
                <img
                    id="contact-img" 
                    src="/img/home/footer_img.jpg" 
                    alt="Contact me here"
                />
                <ul id="social-1">
                    { this.props.addLinks() }
                </ul>
            </div>
        );
    }
}

export default ContactLinks;