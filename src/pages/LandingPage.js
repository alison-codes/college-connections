import React from 'react';
import { Link } from 'react-router-dom';
import ConfettiGenerator from "confetti-js";

import dog from '../images/dog.svg';
import computer from '../images/computer.svg';


const LandingPage = (props) => {
    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(confetti.clear, 1000);
        return () => confetti.clear();
    }, [])

    return (
        <div className="landing-background">
            <section>
                <Link to='/events' className='NavBar-link'>Get Started</Link>
            </section>
            <canvas id="my-canvas"></canvas>
        </div>

    );
};

export default LandingPage;



