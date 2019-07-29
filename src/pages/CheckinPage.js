import React from 'react';
import { Redirect, } from "react-router-dom";

class CheckinPage extends React.Component {
    state = {
        redirect: false,
    };

    handleChange = e => {
        let field = e.target.name;
        this.setState({
            [field]: e.target.value
        });
    };

    isFormInvalid() {
        return !(this.state.redirect);
    }

    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/match' />;
        }
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
                            <input className="checkin-input" type="text" name="redirect"
                                onChange={this.handleChange}
                            />
                            <br /><br /><br />
                            <h3
                                hidden={this.isFormInvalid()}>
                                <span role="img" aria-label="thumbs up">👍</span>
                                </h3>
                        </form>
                    </div>
                    <br />
                </main>
            </div>
        );
    };
}

export default CheckinPage;

