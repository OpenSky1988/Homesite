import React, {Component} from 'react';
import './ViewGalleryButton.css';

class ViewGalleryButton extends Component {
    render() {
        return (
            <a  className="btn" 
                id="view-gallery-btn"
                href="#gallery">
                View gallery
            </a>
        )
    }
}

export default ViewGalleryButton;

