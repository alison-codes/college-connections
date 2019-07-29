import React from 'react';

import dog from '../images/dog.svg';
import computer from '../images/computer.svg';


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





{/* <main id="color-background2">
    <h1 id="matchy-greeting2">HEY!</h1>
    <img id="matchy-image2" className="interstImg" src={computer} alt="User interest" />
    <h1 id="matchy-number-msg2">LOOK FOR 2 OTHER FOLKS WITH THE SAME CARD</h1>
</main> */}


