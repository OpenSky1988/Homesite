import React from 'react';
import { Link } from 'react-router-dom';
import './Hello404.less';

const Hello404 = () => (
  <div className="error-page-container">
    <h1>404</h1>
    <p>Probably, you used a wrong link or the page is deleted. <Link to="/">Back to Home</Link>.</p>
  </div>
);

export default Hello404;
