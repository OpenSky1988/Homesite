import React from 'react';
import { connect } from 'react-redux';

import './Contacts.less';

import ContactLinks from '../ContactLinks/ContactLinks';
import ContactForm from '../ContactForm/ContactForm';
import MailSentOverlay from '../MailSentOverlay/MailSentOverlay';
import { IState } from '../../reducers/initialState';

interface IProps {
  isSuccessBlockShown: boolean;
  addLinks: () => JSX.Element[];
}

const Contacts: React.FC<IProps> = (props) => (
  <section id="contacts">
    <div className="container">
      <h3 className="contacts-header">Want to make something together?</h3>
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

const mapStateToProps = (state: IState) => ({
  isSuccessBlockShown: state.isSuccessBlockShown,
});

export default connect(mapStateToProps, {})(Contacts);
