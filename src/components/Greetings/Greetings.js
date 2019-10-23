import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Greetings.css';

const Greetings = () => (
  <section className="inform">
    <div className="container">
      <p>
        Greetings, dear visitor! My name is Alexander and I am very glad to see you in my virtual guestroom. Please,
        feel free to take a virtual armchair and have a virtual tea. My craft and passion is Front-end Development and UI/UX Design. I strive
        to make every page intuitive and beautiful to give great aesthetic pleasure from interaction with it. I know
        my strengths and I am result-oriented. I do not leave my job undone. If you are seeking for a web-presence
        or looking for a staff web-developer, you can contact me <Link to="/#contacts">here</Link>.
      </p>
    </div>
  </section>
);

export default Greetings;
