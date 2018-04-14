import React, {Component} from 'react';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div className="container">
                    <h2>Projects</h2>
                    <div className="row">
                        { this.props.addProjects() }
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;