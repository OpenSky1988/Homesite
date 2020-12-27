import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from '../NavLink';

import './NavMobileMenu.less';

interface IProps {
  toggleMobileMenu: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavMobileMenu: React.FC<IProps> = ({ toggleMobileMenu }) => {
  const {t} = useTranslation();

  return (
    <div className="mobile-nav">
      <div className="container">
        <ul>
          <NavLink
            label={t('Navigation.Home')}
            onClick={toggleMobileMenu}
            to="/#home"
          />
          <NavLink
            label={t('Navigation.Services')}
            onClick={toggleMobileMenu}
            to="/#services"
          />
          <NavLink
            label={t('Navigation.Projects')}
            onClick={toggleMobileMenu}
            to="/#projects"
          />
          <NavLink
            label={t('Navigation.Contacts')}
            onClick={toggleMobileMenu}
            to="/#contacts"
          />
          <NavLink
            className="blog-button"
            label={t('Navigation.Blog')}
            onClick={toggleMobileMenu}
            to="/blog#blog-title"
          />
        </ul>
      </div>
    </div>
  );
};

export default NavMobileMenu;
