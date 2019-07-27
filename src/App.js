import React, { Component } from 'react';
import logo from './logo.svg';
import SignupPage from './pages/SignupPage';
import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


class App extends Component {
  state = {
    user: null,
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          {/* TODO add back logo if necessary <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <main>
        <Route exact path="/signup" render={ props =>
            <SignupPage
            /> } 
          />
          Main App
        </main>
        <footer className="Footer">Made with 💙 for LNKD by Macie, Ali, Chris, and Yang x 2</footer>
      </div>
    );
  }
}

export default App;
