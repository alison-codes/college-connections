import React, { Component } from "react";
import userService from "../utils/userService";

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="displayName">Display Name: </label>
          <input
            value={this.state.displayName}
            type="text"
            id="displayName"
            name="displayName"
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password: </label>
          <input
            value={this.state.password}
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
          />

          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
