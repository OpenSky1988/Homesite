import React, {Component} from 'react';

import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

class Main extends Component {
    render() {
        return(
            <main>
                <Banner />
                <Greetings />
                <Services skillsList={ this.props.skillsList } />
                <Projects addProjects={ this.props.addProjects }/>
                <Contacts addLinks={ this.props.addLinks } />
            </main>
        );
    }
}

export default Main;