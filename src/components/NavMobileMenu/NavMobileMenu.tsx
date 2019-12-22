import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavMobileMenu.less';

interface IProps {
  toggleMobileMenu: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavMobileMenu = (props: IProps) => (
  <div className="mobile-nav">
    <div className="container">
      <ul>
        <li>
          <Link
            to="/#home"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="/#services"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            services
          </Link>
        </li>
        <li>
          <Link
            to="/#projects"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            projects
          </Link>
        </li>
        <li>
          <Link
            to="/#contacts"
            className="bt"
            onClick={props.toggleMobileMenu}
          >
            contacts
          </Link>
        </li>
        <li id="mobile-blog-btn">
          <Link
            to="/blog#blog-title"
            onClick={props.toggleMobileMenu}
          >
            blog
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NavMobileMenu;
