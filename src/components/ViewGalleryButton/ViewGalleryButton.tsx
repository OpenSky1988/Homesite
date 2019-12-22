import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ViewGalleryButton.less';

const ViewGalleryButton = () => (
  <Link
    className="btn view-gallery-btn"
    to="/#projects"
  >
    View gallery
  </Link>
);

export default ViewGalleryButton;
