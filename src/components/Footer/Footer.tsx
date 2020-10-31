import React from 'react';
import './Footer.less';
import StaticData from '../StaticData';

const Footer = () => (
  <footer>
    <div className="copy container">
    <p>Copyright Alexander Prisazhny {StaticData.year}</p>
    </div>
  </footer>
);

export default Footer;
