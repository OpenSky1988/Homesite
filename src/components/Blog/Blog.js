import React, {Component} from 'react';
import './Blog.css';

class Blog extends Component {
    render() {
        return(
            <main>
                <header id="blog-title">
                    <div className="container">
                        <div className="h1">
                            <div className="letter b">B</div>
                            <div className="letter l">l</div>
                            <div className="letter o">o</div>
                            <div className="letter g">g</div>
                        </div>
                        <h3>Thoughts on work and life.</h3>
                    </div>
                </header>

                <section id="blog">
                    <div className="container" id="cont">
                        { this.props.addArticles() }
                    </div>
                </section>
            </main>
        );
    }
}

export default Blog;