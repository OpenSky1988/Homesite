import React from 'react';
import PropTypes from 'prop-types';
import './Blog.css';

const Blog = (props) => {
  const articles = props.addArticles();

  return (
    <main className="blog">
      <header id="blog-title">
        <div className="container">
          <div className="h1">
            <div className="letter b">B</div>
            <div className="letter l">l</div>
            <div className="letter o">o</div>
            <div className="letter g">g</div>
          </div>
          <h3>Thoughts on work and life.</h3>
        </div>
      </header>

      <section id="blog">
        <div className="container" id="cont">
          { articles }
        </div>
      </section>
    </main>
  );
};

Blog.propTypes = {
  addArticles: PropTypes.func.isRequired,
};

export default Blog;
