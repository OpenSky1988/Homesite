import React from 'react';
import './Banner.less';

import ViewGalleryButton from '../ViewGalleryButton/ViewGalleryButton';

const Banner: React.FC<{}> = () => (
  <section id="home">
    <div className="container">
      <header>
        <h1>Hi! I'm Alex.</h1>
        <p>I'm passionate about Web Development, UX,
          and UI and use it to change the world for the better!
        </p>
      </header>
      <ViewGalleryButton />
      <img className="my_img-1" src="/img/home/my_img.jpg" alt="Hello there" />
    </div>
  </section>
);

export default Banner;
