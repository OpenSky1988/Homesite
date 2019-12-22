import React from 'react';
import { ISkill } from '../DataBase';
import './Services.less';

interface IProps {
  addServices: () => JSX.Element[];
}

const Services: React.FC<IProps> = (props) => (
  <section id="services">
    <div className="container">
      <h2>Services</h2>
      <div className="skill-container">
        {props.addServices()}
      </div>
    </div>
  </section>
);

export default Services;
