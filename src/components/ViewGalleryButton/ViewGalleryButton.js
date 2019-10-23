import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ViewGalleryButton.css';

const ViewGalleryButton = () => (
  <Link 
    className="btn"
    id="view-gallery-btn"
    to="/#projects"
  >
    View gallery
  </Link>
);

export default ViewGalleryButton;
