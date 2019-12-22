import React from 'react';

import './ErrorDisplay.less';

interface IProps {
  error: string;
}

const ErrorDisplay = (props: IProps) => (
  <div className="error-notification">
    {props.error}
  </div>
);

export default ErrorDisplay;
