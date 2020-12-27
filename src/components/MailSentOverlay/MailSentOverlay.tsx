import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import './MailSentOverlay.less';

import toggleMessageSuccessBlock from '../../actions/messageSuccessBlockActions';

interface IProps {
  toggleMessageSuccessBlock: (isSuccessBlockShown: boolean) => void;
}

const MailSentOverlay: React.FC<IProps> = ({ toggleMessageSuccessBlock }) => {
  const {t} = useTranslation();

  const hideMessageSuccessBlock = (): void => {
    // Animate success block unmount
    toggleMessageSuccessBlock(false);
  };

  return(
    <div className="mail-sent-overlay">
      <div className="check-icon">
        <span className="icon-line line-tip" />
        <span className="icon-line line-long" />
        <div className="icon-circle" />
        <div className="icon-fix" />
      </div>
      <p>{t('MainScreen.Contact.Form.Success')}</p>
      <button className="btn" onClick={hideMessageSuccessBlock}>Send more?</button>
    </div>
  );
};

const mapDispatchToProps = {
  toggleMessageSuccessBlock,
};

export default connect(null, mapDispatchToProps)(MailSentOverlay);
