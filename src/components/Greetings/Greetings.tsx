// tslint:disable:max-line-length
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Greetings.less';

const Greetings: React.FC<{}> = () => (
  <section className="inform">
    <div className="container">
      <p>
        Hi! My name is Alexander and I am happy to see you in my home on the Web. This app represents my professional ablities. My craft and passion is Front-end Development and UI/UX building. I strive
        to make every page intuitive and beautiful. I know my strengths and I am result-oriented. If you are seeking for a web-presence
        or looking for a staff web-developer, you can contact me <Link to="/#contacts">here</Link>.
      </p>
    </div>
  </section>
);

export default Greetings;
