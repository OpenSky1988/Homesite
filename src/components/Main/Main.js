import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../Banner/Banner';
import Greetings from '../Greetings/Greetings';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';

const Main = props => (
  <main>
    <Banner />
    <Greetings />
    <Services addServices={props.addServices} />
    <Projects addProjects={props.addProjects} />
    <Contacts addLinks={props.addLinks} />
  </main>
);

Main.propTypes = {
  addServices: PropTypes.func.isRequired,
  addProjects: PropTypes.func.isRequired,
  addLinks: PropTypes.func.isRequired,
};

export default Main;
