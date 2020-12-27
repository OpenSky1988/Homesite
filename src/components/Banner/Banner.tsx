import React from 'react';
import { useTranslation } from 'react-i18next';
import './Banner.less';

import ViewGalleryButton from '../ViewGalleryButton/ViewGalleryButton';

const Banner: React.FC<{}> = () => {
  const {t} = useTranslation();

  return (
    <section id="home">
      <div className="container">
        <header>
          <h1>{t('MainScreen.Banner.Title')}</h1>
          <p>{t('MainScreen.Banner.Description')}</p>
          <ViewGalleryButton text={t('MainScreen.Banner.Button')} />
        </header>
        <img className="my_img-1" src="/img/home/my_img.jpg" alt="Hello there" />
      </div>
    </section>
  );
};

export default Banner;
