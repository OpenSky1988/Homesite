import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './ViewGalleryButton.less';

const ViewGalleryButton: React.FC<{text: string}> = ({
  text,
}) => (
  <div className="btn view-gallery-btn">
    <Link to="/#projects">
      {text}
    </Link>
  </div>
);

export default ViewGalleryButton;
