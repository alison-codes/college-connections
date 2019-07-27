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

class App extends Component {
  state = {
    user: null
  };

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
          </Switch>
        </main>
        <footer className="Footer">Made with <span role="img" aria-label="heart">💙</span> for LNKD by Macie, Ali, Chris, and Yang x 2</footer>
      </div>
    );
  }
}

export default App;
