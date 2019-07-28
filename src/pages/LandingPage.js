import React from 'react';
import { Link } from 'react-router-dom';
import ConfettiGenerator from "confetti-js";

import interest1 from '../images/Gaming.png';


const LandingPage = (props) => {
    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        
        confetti.render();
        setTimeout(confetti.clear, 100000);
        return () => confetti.clear();
    }, [])

    return (
        <div className="landing-background">
            Landing page
            <section>
                <Link to='/events' className='NavBar-link'>Get Started</Link>
            </section>
            <canvas id="my-canvas"></canvas>

        </div>

    );
};

export default LandingPage;

