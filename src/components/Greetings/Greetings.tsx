// tslint:disable:max-line-length
import React from 'react';
import { useTranslation } from 'react-i18next';
import { HashLink as Link } from 'react-router-hash-link';
import './Greetings.less';

const Greetings: React.FC<{}> = () => {
  const {t} = useTranslation();

  return (
    <section className="inform">
      <div className="container">
        <p>
          {t('MainScreen.Greetings.Text')}
          <Link to="/#contacts">{t('MainScreen.Greetings.Here')}</Link>
          .
        </p>
      </div>
    </section>
  );
};

export default Greetings;
