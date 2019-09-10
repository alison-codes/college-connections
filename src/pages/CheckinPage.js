import React from 'react';
import {  Link } from "react-router-dom";

class CheckinPage extends React.Component {
    state = {
        redirect: false,
        value: 0,
    };

    handleChange = e => {
        let field = e.target.name;
        this.setState({
            [field]: e.target.value
        })

    }

    redirect() {
        this.props.history.push('/match');
    }


    isFormInvalid() {
        return !(this.state.value);
    }

    // const { redirect } = this.state;
    // if (redirect) {
    //     return <Redirect to='/match' />;
    // }
    render() {

        return (
            <div className="fadeIn">
            <div className="landing-background">
                <main id="color-background1">
                    <h2 id="checkin-greeting">Hackathon Enthusiast Meetup<br /> 222 Second St. LinkedIn</h2>
                    <h1 id="checkin-msg">ASK YOUR EVENT HOST FOR THE CHECK-IN CODE</h1>

                    <div className="row checkin-row">
                        <form action="">
                            <input className="checkin-input" type="text" maxLength="1"
                            />
                            <input className="checkin-input" type="text" maxLength="1"
                            />
                            <input className="checkin-input" type="text" maxLength="1"
                            />
                            <input className="checkin-input" type="text" name="value" maxLength="1"
                                onChange={this.handleChange.bind(this)}
                            />
                            <br />
                            <h2
                                className="thumbsup-msg"
                                hidden={this.isFormInvalid()}>
                                <Link to='/match'>
                                    <span
                                        className="thumbsup"
                                        role="img" width="200px" aria-label="thumbs up">👍
                                    </span>
                                </Link>
                                <br />
                                You're checked in. Tap the thumb to reveal your Match.
                            </h2>
                        </form>
                    </div>
                    <br />
                </main>
            </div>
            </div>
        );
    };
}

export default CheckinPage;

