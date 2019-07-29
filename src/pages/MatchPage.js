import React from 'react';

import dog from '../images/dog.svg';

const MatchPage = (props) => {
    return (
        <div className="landing-background">
            <main id="color-background1">
                <h1 id="matchy-greeting1">HOLA!</h1>
                <img id="matchy-image1" className="interstImg" src={dog} alt="User interest" />
                <h1 id="matchy-number-msg1">LOOK FOR 5 OTHER FOLKS WITH THE SAME CARD</h1>
            </main>
        </div>

    );
};

export default MatchPage;

