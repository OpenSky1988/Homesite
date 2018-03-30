import React, {Component} from 'react';
import './Greetings.css';

class Greetings extends Component {
    render() {
        return (
            <section className="inform">
                <div className="container">
                    <p>Greetings, dear visitor! My name is Alexander and I am very glad to see you in my virtual guestroom. Please,
                        feel free to take a virtual armchair and have a virtual tea. I am Frontend Developer, UI/UX Designer. I strive
                        to make every page intuitive and beautiful to give great aesthetic pleasure from interaction with it. I know
                        my strengths and I am result-oriented. I do not leave my job undone. If you are seeking for a web-presence
                        or looking for a staff web-developer, you can contact me <a href="#footer">here</a>.</p>
                </div>
            </section>
        )
    }
}

export default Greetings;