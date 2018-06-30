import React from 'react';
import { Link } from 'react-router-dom'
import './Hello404.css';

const Hello404 = () => (
  <div id="error-page-container">
    <h1>404</h1>
    <p>Probably, you used a wrong link or the page is deleted. <Link to="/">Back to Home</Link>.</p>
  </div>
);

export default Hello404;