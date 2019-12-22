import React, { ReactNode } from 'react';
import './ContactLinks.less';

interface IProps {
  addLinks: () => JSX.Element[];
}

const ContactLinks = (props: IProps) => (
  <div className="contact-links">
    <img
      className="contact-img"
      src="/img/home/footer_img.jpg"
      alt="Contact me here"
    />
    <ul className="social">
      {props.addLinks()}
    </ul>
  </div>
);

export default ContactLinks;
