/* global document */
/* global window */

import React, { FunctionComponent } from 'react';

import '../../App.less';

/* Static Components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const AuthLayout: FunctionComponent = ({children}) => (
  <div className="main-layout">
    <>
      <Header />
      {children}
    </>
    <Footer />
  </div>
);

export default AuthLayout;
