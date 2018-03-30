import React, {Component} from 'react';
import './Services.css';

class Services extends Component {

    render() {
        return (
            <section id="services">
                <div className="container">
                    <h3>Services</h3>
                    <div className="row">
                        { this.props.skillsList() }
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;