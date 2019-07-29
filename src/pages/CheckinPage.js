import React from 'react';

import dog from '../images/dog.svg';

class CheckinPage extends React.Component {
    state = {
        code: null,

    };


    render() {
        return (
            <div className="landing-background">
                <main id="color-background1">
                    <h2 id="checkin-greeting">Hackathon Enthusiast<br /> 222 Second St. LinkedIn</h2>
                    <h1 id="checkin-msg">ASK YOUR EVENT HOST FOR THE CHECK-IN CODE</h1>

                    <div className="row checkin-row">
                        <form action="">
                            <input className="checkin-input" type="text"
                            />
                            <input className="checkin-input" type="text"
                            />
                            <input className="checkin-input" type="text"
                            />
                            <input className="checkin-input" type="text"
                            />
                        </form>
                    </div>
                    <br />
                    <img id="matchy-image1" className="interstImg" src={dog} alt="User interest" />
                </main>
            </div>
        );
    };
}

export default CheckinPage;

