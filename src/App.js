/* global document */
/* global window */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

/* Static Components */
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <div>
          <Header
            /* setProjectState={ this.setProjectState }
            setArticleState={ this.setArticleState } */
          />
          <Route
            path="(/|/home)"
            render={() => (<Main
              addServices={this.addServices}
              addProjects={this.addProjects}
              addLinks={this.addLinks}
            />)
            }
          />
          <Route
            path="/blog"
            render={() => (<Blog
            />)
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
