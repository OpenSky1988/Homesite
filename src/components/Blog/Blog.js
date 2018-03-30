import React, {Component} from 'react';

class Blog extends Component {
    render() {
        return(
            <main>
                <div id="blog-title">
                    <div class="container">
                        <div class="h1">
                            <div class="letter b">B</div>
                            <div class="letter l">l</div>
                            <div class="letter o">o</div>
                            <div class="letter g">g</div>
                        </div>
                        <h3>Thoughts on work and life.</h3>
                    </div>
                </div>
                <!-- Blog-->
                <div class="blog">
                    <div class="container" id="cont">
                        <!-- Open article appears here-->
                        <div class="article-prev" id="a1">
                            <div class="ap-image" id="img-1"></div>
                            <div class="content">
                                <h2>What caused my career change?</h2>
                                <div class="post-date">
                                    <h4>12 April, 2017</h4>
                                </div>
                                <p class="description">Most people are told what to do and where to go, for example, by the loved ones. But even the closest
                                    people cannot fully understand our own way. Nobody can, but us. Therefore, it is our mission to find
                                    and persuade it.</p>
                                <div class="view-button">View more</div>
                            </div>
                        </div>
                        <div class="article-prev" id="a2">
                            <div class="ap-image" id="img-2"></div>
                            <div class="content">
                                <h2>Basic steps in building a web presence</h2>
                                <div class="post-date">
                                    <h4>01 May, 2017</h4>
                                </div>
                                <p class="description">Web presence building requires good design, and technical skills. But one should not forget about purpose
                                    and planning as a fundament of the whole process. Owner and his audience have their own needs and
                                    you are to meet them.</p>
                                <div class="view-button">View more</div>
                            </div>
                        </div>
                        <div class="article-prev" id="a3">
                            <div class="ap-image" id="img-3"></div>
                            <div class="content">
                                <h2>Should work bring joy?</h2>
                                <div class="post-date">
                                    <h4>06 May, 2017</h4>
                                </div>
                                <p class="description">It is a tough philosophical question. Is it possible to be happy working on a job which you feel isn't
                                    yours? How to define that so-called 'your' job? Is hobby still joyful when you make it a job? Let's
                                    take a closer look, friends!</p>
                                <div class="view-button">View more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Blog;