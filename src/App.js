import React, { Component } from "react";
// import logo from "./logo.svg";
import SignupPage from "./pages/SignupPage";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import userService from "./utils/userService";
import LoginPage from "./pages/LoginPage";
import EventsPage from "./pages/EventsPage";
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
                <EventsPage
                  {...props}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                  handleUpdateEvents={this.handleUpdateEvents}
                  events={this.state.events}
                />
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
            
          </Switch>
        </main>
        <footer className="Footer">Made with <span role="img" aria-label="heart">💙</span> for LNKD by Macie, Ali, Chris, and Yang x 2</footer>
      </div>
    );
  }
}

export default App;
