import React, {Component} from 'react';
import './Contacts.css';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';

class Contacts extends Component {

    render() {
        return (
            <section id="contacts">
                <div className="container">
                    <h3 id="contacts-header">Want to make something together?</h3>
                    <div id="contacts-row">
                        <ContactForm addLinks={ this.props.addLinks } />
                        <ContactLinks addLinks={ this.props.addLinks } />
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;