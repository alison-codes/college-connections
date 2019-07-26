import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          {/* TODO add back logo if necessary <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <main>
          Main App
        </main>
        <footer className="Footer">Made with 💙 for LNKD by Macie, Ali, Chris, and Yang x 2</footer>
      </div>
    );
  }
}

export default App;
