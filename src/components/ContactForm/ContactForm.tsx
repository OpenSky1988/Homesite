import emailjs from 'emailjs-com';
import React, { Component, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import validator from 'validator';

import './ContactForm.less';

import { updateContactForm, clearContactForm } from '../../actions/contactFormActions';
import updateError from '../../actions/errorActions';
import toggleMessageLoader from '../../actions/messageLoaderActions';
import toggleMessageSuccessBlock from '../../actions/messageSuccessBlockActions';

import ErrorDisplay from '../ErrorDisplay/ErrorDisplay';
import privateConfig from '../../privateConfig';
import { IState } from '../../reducers/initialState';

interface IProps {
  contactForm: {
    email: string;
    name: string;
    phone: string;
    text: string;
  };
  error: string;
  isLoading: boolean;
  clearContactForm: () => void;
  toggleMessageLoader: (isLoading: boolean) => void;
  toggleMessageSuccessBlock: (isSuccessBlockShown: boolean) => void;
  updateContactForm: (key: string, value: string) => void;
  updateError: (errorMessage: string) => void;
}

const ContactForm: React.FC<IProps> = ({
  contactForm: {
    email,
    name,
    phone,
    text,
  },
  error,
  isLoading,
  clearContactForm,
  toggleMessageLoader,
  toggleMessageSuccessBlock,
  updateContactForm,
  updateError,
}) => {
  emailjs.init(privateConfig.emailJS.userKey);
  const {t} = useTranslation();

  const onChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    if (!isLoading) {
      new Promise((resolve, reject) => {
        resolve(updateContactForm(name, value));
      }).then(() => {
        validateForm();
      });
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const isFormEmpty = (
      validator.isEmpty(email) ||
      validator.isEmpty(name) ||
      validator.isEmpty(text)
    );

    if (!isLoading && !isFormEmpty && !error) {
      toggleMessageLoader(true);
      // disableFormElements(true);
      sendEmail();
    }
  };

  const showMessageSuccessBlock = () => toggleMessageSuccessBlock(true);

  const sendEmail = async () => {
    await emailjs.send(
      'gmail',
      privateConfig.emailJS.template,
      {
        message_html: text,
        from_name: name,
        reply_to: email,
        phone,
      },
    ).then((res) => {
      console.log('EmailJS: Email successfully sent!');
      clearContactForm();
    }).catch((err) => {
      console.warn(`EmailJS: Error while sending email: ${JSON.stringify(err, null, '  ')}`);
    });

    toggleMessageLoader(false);
    // disableFormElements(false);
    // Animate message success appearance
    showMessageSuccessBlock();
  };

  const switchClass = (element: Element, targetClass: string, add: boolean) => {
    if (add) {
      const newClass = (element.className.length === 0)
        ? targetClass
        : ` ${targetClass}`;

      element.className += newClass;
    } else {
      const oldClass = element.className.replace(
        new RegExp('\\b' + targetClass + '\\b'),
        '',
      );

      element.className = oldClass;
    }
  };

  const disableFormElements = (value: boolean) => {
    const formInputs = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    const formTextArea = document.querySelector('textarea') as HTMLTextAreaElement;
    const submitBtn = document.querySelector('.submit-btn') as HTMLElement;

    submitBtn.innerText = value ? t('MainScreen.Contact.Form.Button.Sending') : t('MainScreen.Contact.Form.Button.Submit');
    switchClass(submitBtn, 'disabled-btn', value);

    formTextArea.disabled = value;
    switchClass(formTextArea, 'disabled-input', value);

    Array.prototype.forEach.call(formInputs, (input: HTMLInputElement) => {
      input.disabled = value;
      switchClass(input, 'disabled-input', value);
    });
  };

  const validateForm = () => {
    if (email && validator.isEmpty(email)) {
      updateError(t('MainScreen.Contact.Form.Error.NoEmail'));
    } else if (email && !validator.isEmail(email)) {
      updateError(t('MainScreen.Contact.Form.Error.WrongEmailFormat'));
    } else if (name && validator.isEmpty(name)) {
      updateError(t('MainScreen.Contact.Form.Error.NoName'));
    } else if (phone && !validator.isMobilePhone(phone, 'any')) {
      updateError(t('MainScreen.Contact.Form.Error.WrongPhoneFormat'));
    } else if (text && validator.isEmpty(text)) {
      updateError(t('MainScreen.Contact.Form.Error.NoText'));
    } else if (email && email.length > 500) {
      updateError(t('MainScreen.Contact.Form.Error.TextExceedsLimit'));
    } else { updateError(''); }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={email}
        className="forms email"
        id="email"
        name="email"
        type="email"
        placeholder={t('MainScreen.Contact.Form.Field.Email')}
      />
      <input
        onChange={onChange}
        value={name}
        className="forms name"
        id="name"
        name="name"
        type="text"
        placeholder={t('MainScreen.Contact.Form.Field.Name')}
      />
      <input
        onChange={onChange}
        value={phone}
        className="forms phone"
        id="phone"
        name="phone"
        type="phone"
        placeholder={t('MainScreen.Contact.Form.Field.Phone')}
      />
      <textarea
        onChange={onChange}
        value={text}
        className="forms text"
        name="text"
        placeholder={t('MainScreen.Contact.Form.Field.Text')}
      />
      {error && <ErrorDisplay error={error} />}
      <button
        className="btn submit-btn"
        id="submit-btn"
        type="submit"
        name="submit"
      >
        {t('MainScreen.Contact.Form.Button.Submit')}
      </button>
    </form>
  );
};

const mapStateToProps = (state: IState) => ({
  contactForm: state.contactForm.input,
  error: state.contactForm.error,
  isLoading: state.contactForm.isLoading,
});

const dispatchStateToProps = {
  updateContactForm,
  clearContactForm,
  updateError,
  toggleMessageLoader,
  toggleMessageSuccessBlock,
};

export default connect(mapStateToProps, dispatchStateToProps)(ContactForm);
