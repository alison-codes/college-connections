import React from 'react';
import { Link } from 'react-router-dom';
import ConfettiGenerator from "confetti-js";

import logo from '../images/matchy_logo.svg';


const LandingPage = (props) => {
    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        return () => confetti.clear();
    }, [])

    return (
        <div className="landing-background">
      
            <section>
                <Link to='/events' className='NavBar-link'>  
                <img id="logo-landing" src={logo} height="250px" alt="Logo" /> </Link>
            </section>
            <canvas id="my-canvas"></canvas>
        </div>

    );
};

export default LandingPage;



