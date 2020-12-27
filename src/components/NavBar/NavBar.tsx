import React from 'react';
import { useTranslation } from 'react-i18next';
import NavLink from '../NavLink';

import './NavBar.less';

const NavBar: React.FC<{}> = () => {
  const {t} = useTranslation();

  return (
    <ul className="nav">
      <NavLink
        label={t('Navigation.Home')}
        to="/#home"
      />
      <NavLink
        label={t('Navigation.Services')}
        to="/#services"
      />
      <NavLink
        label={t('Navigation.Projects')}
        to="/#projects"
      />
      <NavLink
        label={t('Navigation.Contacts')}
        to="/#contacts"
      />
      <NavLink
        className="blog-button"
        label={t('Navigation.Blog')}
        to="/blog#blog-title"
      />
    </ul>
  );
};

export default NavBar;
