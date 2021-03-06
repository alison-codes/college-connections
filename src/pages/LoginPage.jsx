import React, { Component } from "react";
import { Link } from 'react-router-dom';
import userService from "../utils/userService";

import backArrow from '../images/backarrow.svg';
import facebookImg from '../images/facebook.svg';
import instaImg from '../images/instagram.svg';
import twitterImg from '../images/twitter.svg';
import linkedinImg from '../images/linkedin.svg';


class LoginPage extends Component {
  state = {
    displayName: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/events");
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className="row Signup-nav">
          <div className="col-6">
            <h2><Link to='/'><img src={backArrow} alt="Back Arrow" /></Link> Log In</h2>
          </div>
          <div className="col-6">
          </div>
        </div>
        <h4 className="Signup-msg">Colorful college life starts here!</h4>

        <form onSubmit={this.handleSubmit}>
          {/* <label htmlFor="displayName">Display Name: </label> */}
          <input placeholder="  username" value={this.state.displayName} type="text" id="displayName" name="displayName" onChange={this.handleChange} />
          <br />
          {/* <label htmlFor="password">Password: </label> */}
          <input placeholder="  password " value={this.state.password} type="password" id="password" name="password" onChange={this.handleChange} />
          <br />
          <button className="Login-btn">Log In</button>
        </form>
        <p className="row Login-auth centered"> Or log in with </p>
        <img src={linkedinImg} alt="LinkedIn" />
        <img src={instaImg} alt="Instagram" />
        <img src={facebookImg} alt="Facebook" />
        <img src={twitterImg} alt="Twitter" />

        <p className="row Login-signuplink centered"> Don't have an account yet?</p>

        <p className="row app-link centered"> <Link className="app-link" to='/signup'> Sign Up</Link></p>
      </div>
    );
  }
}

export default LoginPage;
