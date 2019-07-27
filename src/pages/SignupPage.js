import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import userService from "../utils/userService";

var Filter = require("bad-words"),
  filter = new Filter();

class SignupPage extends React.Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        passConf: '',

        isDisplayNameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
        isPassConfValid: false,

        displayNameFeedback: null,
        emailFeedback: null,
        passwordFeedback: null,
        passConfFeedback: null,
    };


    handleChange = e => {
        let field = e.target.name;
        this.setState({
            [field]: e.target.value
        });
      });
  };

  validateName = e => {
    let name = e.target.value;
    let feedback = Feedback["name"][0];
    let isNameValid = true;
    if (name === "") {
      feedback = Feedback["name"][1];
      isNameValid = false;
    } else if (!name.match(/^[A-Za-z]+$/)) {
      feedback = Feedback["name"][2];
      isNameValid = false;
    }

    let field = e.target.name;
    field = field.charAt(0).toUpperCase() + field.slice(1);

    this.setState({
            [e.target.name + 'Feedback']: feedback,
            ['is' + field + 'Valid']: isNameValid
        });
    };


    validateDisplayName = e => {
        let displayName = e.target.value;
        let re = /^[A-Za-z]+[A-Za-z\d_ ]*[A-Za-z\d]$/;
        let feedback = Feedback['displayName'][0];
        let isFieldValid = true;

        if (displayName === '' && e.type !== 'change') {
            if (this.state.firstName && this.state.lastName) {
                this.setState({ displayName: this.state.firstName + ' ' + this.state.lastName });
            } else {
                feedback = Feedback['displayName'][1];
                isFieldValid = false;
            }
        }
        else if (displayName.length < 2) {
            feedback = Feedback['displayName'][2];
            isFieldValid = false;
        }
        else if (!displayName.match(re)) {
            feedback = Feedback['displayName'][3];
            isFieldValid = false;
        }
        else if (filter.isProfane(displayName)) {
            feedback = Feedback['displayName'][4];
            isFieldValid = false;
        }
      
  validateEmail = e => {
    let email = e.target.value;
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+edu/;
    let feedback = Feedback["email"][0];
    let isEmailValid = true;

    if (email === "") {
      feedback = Feedback["email"][1];
      isEmailValid = false;
    } else if (!email.match(re)) {
      feedback = Feedback["email"][2];
      isEmailValid = false;
    }

    this.setState({
      emailFeedback: feedback,
      isEmailValid
    });

    // if(isEmailValid) {
    //   this.props.isEmailAvailable(email, () => {
    //     this.setState({
    //       emailFeedback: Feedback['email'][3],
    //       isEmailValid: false
    //     });
    //   });
    // }
  };

  validatePassword = e => {
    let password = e.target.value;
    let feedback = Feedback["password"][0];
    let isFieldValid = true;

    let validState = {
      lengthReq: true,
      numReq: true,
      charReq: true
    };

    getPasswordFeedback = (fbs) => {
        fbs = fbs.split('|');
        fbs.pop();
        return <ul>
            {fbs.map(fb =>
                <li key={fb.toString()}>{fb}</li>
            )}
        </ul>;

    if (password === "") {
      feedback = Feedback["password"][1];
      isFieldValid = false;
    } else {
      if (password.length < 6) {
        validState.lengthReq = false;
        isFieldValid = false;
      }
      if (!password.match(/\d/)) {
        validState.numReq = false;
        isFieldValid = false;
      }
      if (!(password.match(/[a-z]/) && password.match(/[A-Z]/))) {
        validState.charReq = false;
        isFieldValid = false;
      }
      if (!isFieldValid) {
        let fbs = Object.keys(validState).filter(key => !validState[key]);
        let fb = "";
        if (fbs.includes("lengthReq")) fb += Feedback["password"][2] + "|";
        if (fbs.includes("numReq")) fb += Feedback["password"][3] + "|";
        if (fbs.includes("charReq")) fb += Feedback["password"][4] + "|";
        if (fbs !== "") feedback = this.getPasswordFeedback(fb);
      }

    }

    this.setState({
      passwordFeedback: feedback,
      isPasswordValid: isFieldValid
    });
  };

  validatePassConf = e => {
    let passConf = e.target.value;
    let feedback = Feedback["passConf"][0];
    let isFieldValid = true;

    if (passConf === "") {
      feedback = Feedback["passConf"][1];
      isFieldValid = false;
    } else if (!this.state.isPasswordValid) {
      feedback = Feedback["passConf"][2];
      isFieldValid = false;
    } else if (passConf !== this.state.password) {
      feedback = Feedback["passConf"][3];
      isFieldValid = false;
    }

    render() {
        return <div>
            <Link to='/'> back arrow </Link>

            {this.props.user ?
                <Container>
                    <Card>
                        TODO add a list of interests here and a next button to continue to events page
                        Place to list and interests
                   <Link to='/events'> arrow to see events </Link>
                    </Card>
                </Container>

                :
                <Container
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Card>
                        <Card.Body>
                            <Form
                                autoComplete='off'
                                onSubmit={this.handleSubmit}
                            >
                                <this.ControlGroup id="displayName" labelText="Username " />
                                <this.ControlGroup id="email" labelText="College Email" />
                                <this.ControlGroup id="password" labelText="Password" type="password" />
                                <this.ControlGroup id="passConf" labelText="Confirm Password" type="password" />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row-reverse',
                                }}>
                                    <Button variant="outline-success" onClick={this.handleSubmit}>Submit</Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            }
        </div>
    this.setState({
      passConfFeedback: feedback,
      isPassConfValid: isFieldValid
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      this.validateFields();
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push("/events");
    } catch (err) {
      console.log(err);
    }
  };

  getPasswordFeedback = fbs => {
    fbs = fbs.split("|");
    fbs.pop();
    return (
      <ul>
        {fbs.map(fb => (
          <li>{fb}</li>
        ))}
      </ul>
    );
  };

  ControlGroup = ({ id, labelText, type = "text" }) => {
    return (
      <Form.Group controlId={id}>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          type={type}
          name={id}
          value={this.state[id]}
          onChange={this.handleChange}
          onBlur={this["validate" + id.charAt(0).toUpperCase() + id.slice(1)]}
          isValid={
            this.state[id + "Feedback"] &&
            this.state[
              "is" + id.charAt(0).toUpperCase() + id.slice(1) + "Valid"
            ]
          }
          isInvalid={
            this.state[id + "Feedback"] &&
            !this.state[
              "is" + id.charAt(0).toUpperCase() + id.slice(1) + "Valid"
            ]
          }
        />
        {/* <Form.Control.Feedback type="valid">{this.state[id + 'Feedback']}</Form.Control.Feedback> */}
        <Form.Control.Feedback type="invalid">
          {this.state[id + "Feedback"]}
        </Form.Control.Feedback>
      </Form.Group>
    );
  };

  render() {
    return (
      <Container
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Card>
          <Card.Body>
            <Form autoComplete="off" onSubmit={this.handleSubmit}>
              <this.ControlGroup id="displayName" labelText="Username " />
              <this.ControlGroup id="email" labelText="College Email" />
              <this.ControlGroup
                id="password"
                labelText="Password"
                type="password"
              />
              <this.ControlGroup
                id="passConf"
                labelText="Confirm Password"
                type="password"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse"
                }}
              >
                <Link to="/">Cancel</Link>
                <Button variant="outline-success" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

const Feedback = {
  displayName: [
    "Looks good.",
    "This field is required.",
    "The name is too short",
    "This name contains invalid characters.",
    "This name contains inappropriate language."
  ],
  email: [
    "Looks good.",
    "This field is required.",
    "Please enter your valid school email address ending in .edu.",
    "This email has already been taken."
  ],
  password: [
    "Looks good.",
    "This field is required.",
    "Must contain a minimum of 6 characters",
    "Must contain both uppercase and lowercase letters.",
    "Must contain at least one number."
  ],
  passConf: [
    "Looks good.",
    "This field is required.",
    "The password is invalid",
    "The confirmation does not match the entered password."
  ]
};

export default SignupPage;
