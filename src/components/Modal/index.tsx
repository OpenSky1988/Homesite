import React from 'react';
import './styles.less';

interface IProps {
  children: any;
  className?: string;
  handleClose: (event: any) => void;
  open: boolean;
}

const Modal: React.FC<IProps> = ({
  children,
  className = '',
  handleClose,
  open,
  ...props
}) => (
  open && (
    <div
      className={`modal-shadow${className ? ` ${className}` : ''}`}
      onClick={handleClose}
      role="none"
      {...props}
    >
      <div className="modal-container">
        {children}
      </div>
    </div>
  )
);

export default Modal;
