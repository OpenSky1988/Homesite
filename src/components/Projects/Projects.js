import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <section id="gallery">
                <div className="container">
                    <h3>Projects</h3>
                    { this.props.addProjects() }
                </div>
            </section>
        )
    }
}

export default Projects;