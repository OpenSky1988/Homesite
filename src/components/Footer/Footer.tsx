import React from 'react';
import './Footer.less';
import DataBase from '../DataBase';

const Footer = () => (
  <footer>
    <div className="copy container">
    <p>Copyright Alexander Prisazhny {DataBase.year}</p>
    </div>
  </footer>
);

export default Footer;
