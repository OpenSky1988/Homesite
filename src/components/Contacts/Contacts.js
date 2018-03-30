import React, {Component} from 'react';
import './Contacts.css';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';

class Contacts extends Component {

    render() {
        return (
            <section id="footer">
                <div className="container">
                    <h3 id="contacts">Want to make something together?</h3>
                    <div className="row">
                        <ContactLinks addLinks={ this.props.addLinks } />
                        <ContactForm addLinks={ this.props.addLinks } />
                    </div>
                    <div className="copy">
                        <p>Copyright Alexander Prisazhny 2017</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contacts;