/* global document */
/* global window */

import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

/* Static Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <div>
      <Header />
      <Route
        path="(/|/home)"
        component={Main}
      />
      <Route
        path="/blog"
        component={Blog}
      />
    </div>
    <Footer />
  </div>
);

export default App;

/* -- Returns Error on String 93 --
    setItemState = (e) => {
    const body = document.getElementById('body');
    const name = e.currentTarget.className;
    const isOpen = this.state[name].open;
    
    if (isOpen) {
      this.setState({
        [name]: {
          open: false,
          key: null,
        }
      });
      body.classList.remove('body-overflow');
    } else if (e) {
      this.setState({
        [name]: {
          open: true,
          key: e.currentTarget.id,
        }
      });
      body.classList.add('body-overflow');
    }
  } */
