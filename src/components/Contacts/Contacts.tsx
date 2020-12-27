import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import './Contacts.less';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';
import MailSentOverlay from '../MailSentOverlay/MailSentOverlay';
import { IState } from '../../reducers/initialState';

interface IProps {
  isSuccessBlockShown: boolean;
  addLinks: () => JSX.Element[];
}

const Contacts: React.FC<IProps> = (props) => {
  const {t} = useTranslation();

  return (
    <section id="contacts">
      <div className="container">
        <h3 className="contacts-header">{t('MainScreen.Contact.Title')}</h3>
        <div className="contacts-row">

          { props.isSuccessBlockShown ?
            <MailSentOverlay /> :
            <ContactForm />
          }
          <ContactLinks addLinks={props.addLinks} />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state: IState) => ({
  isSuccessBlockShown: state.contactForm.isSuccessBlockShown,
});

export default connect(mapStateToProps, {})(Contacts);
