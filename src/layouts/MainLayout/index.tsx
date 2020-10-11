/* global document */
/* global window */

import React from 'react';

import '../../App.less';

/* Static Components */
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainLayout: React.FC = ({children}) => (
  <div className="main-layout">
    <>
      <Header />
      {children}
    </>
    <Footer />
  </div>
);

export default MainLayout;
