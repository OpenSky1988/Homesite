import React, { Component } from 'react';
import { connect } from 'react-redux';

import './MailSentOverlay.less';

import toggleMessageSuccessBlock from '../../actions/messageSuccessBlockActions';

interface IProps {
  toggleMessageSuccessBlock: (isSuccessBlockShown: boolean) => void;
}

class MailSentOverlay extends Component <IProps, {}> {
  hideMessageSuccessBlock = (): void => {
    // Animate success block unmount
    this.props.toggleMessageSuccessBlock(false);
  }

  render() {
    return(
      <div className="mail-sent-overlay">
        <div className="check-icon">
          <span className="icon-line line-tip" />
          <span className="icon-line line-long" />
          <div className="icon-circle" />
          <div className="icon-fix" />
        </div>
        <p>Email is successfully sent.</p>
        <button className="btn" onClick={this.hideMessageSuccessBlock}>Send more?</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleMessageSuccessBlock,
};

export default connect(null, mapDispatchToProps)(MailSentOverlay);
