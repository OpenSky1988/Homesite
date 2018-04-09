import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <section id="gallery">
                <div className="container">
                    <h3>Projects</h3>
                    <div className="row">
                        { this.props.addProjects() }
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;