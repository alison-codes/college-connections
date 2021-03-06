import React, { Component } from "react";
// import logo from "./logo.svg";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import userService from "./utils/userService";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage";
import MatchPage from "./pages/MatchPage";
import CheckinPage from "./pages/CheckinPage";
import LandingPage from "./pages/LandingPage";
import eventService from "./utils/eventService";


class App extends Component {
  state = {
    user: userService.getUser(),
    events: []
  };

  handleUpdateEvents = async () => {
    const events = await eventService.index();
    this.setState({ events });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar 
          user={this.state.user}
          handleLogout={this.handleLogout} />
          {/* TODO add back logo if necessary <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/signup"
              render={props => (
                <SignupPage
                  {...props}
                  user={this.state.user}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
            exact
            path="/login"
            render={props => (
              <LoginPage
              {...props}
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
            />
            <Route
              exact
              path="/events"
              render={props => (
                userService.getUser() ?
                <EventsPage
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  handleUpdateEvents={this.handleUpdateEvents}
                  events={this.state.events}
                  user={this.state.user}
                />
                :
                <Redirect to='/signup' />
              )}
            />

            <Route
              exact
              path="/"
              render={props => (
                <LandingPage
                
                />
              )}
            />
            
            <Route
              exact
              path="/match"
              render={props => (
                <MatchPage
                />
              )}
            />

            <Route
              exact
              path="/checkin"
              render={props => (
                <CheckinPage
                {...props}
                />
              )}
            />

          </Switch>
        </main>
        <footer className="Footer">Made with <span role="img" aria-label="heart">💙</span> for LinkedIn</footer>
      </div>
    );
  }
}

export default App;

