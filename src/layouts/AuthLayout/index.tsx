/* global document */
/* global window */

import React from 'react';

import '../../App.less';

/* Static Components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AuthLayout: React.FC = ({children}) => (
  <div className="auth-layout">
    <>
      <Header />
      {children}
    </>
    <Footer />
  </div>
);

export default AuthLayout;
