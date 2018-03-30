import React, {Component} from 'react';
import './Banner.css';

import ViewGalleryButton from '../ViewGalleryButton/ViewGalleryButton';

class Banner extends Component {
    render() {
        return (
            <section id="home">
                <div className="container">
                    <header>
                        <h1>Hi! I'm Alex.</h1>
                        <p>I'm passionate about Web Development, UX, and UI and use it to change the wold for the better!</p>
                    </header>
                    <ViewGalleryButton />
                    <img id="my_img-1" src="/img/home/my_img.jpg" alt="Alex' smiling face with glasses" />
                </div>
            </section>
        )
    }
}

export default Banner;