import React from 'react';
import { LinkProps } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

interface INavLinkProps extends LinkProps {
  label: string;
  className?: string;
}

const NavLink: React.FC<INavLinkProps> = ({
  className = 'bt',
  label,
  to,
  ...props
}) => (
  <li>
    <Link
      to={to}
      className={className}
      {...props}
    >
      {label}
    </Link>
  </li>
);

export default NavLink;
