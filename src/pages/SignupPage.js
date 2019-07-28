import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import userService from '../utils/userService';

import nextBlueArrow from '../images/nextarrowblue.svg';
import backArrow from '../images/backarrow.svg';


import interest1 from '../images/Gaming.png';
import interest2 from '../images/LGBT.png';
import interest3 from '../images/Gig.png';
import interest4 from '../images/Tech.png';
import interest5 from '../images/Painting.png';
import interest6 from '../images/Football.png';
import interest7 from '../images/Reading.png';
import interest8 from '../images/backarrow.svg';



var Filter = require('bad-words'),
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

    field = field.charAt(0).toUpperCase() + field.slice(1);
    this['validate' + field](e);
  };

  validateFields = () => {
    Object.keys(this.state)
      .filter(attr => attr.match(/^is.*Valid$/))
      .forEach(attr => {
        let field = attr.replace('is', '').replace('Valid', '');
        this['validate' + field]({
          target: document.getElementById(field.charAt(0).toLowerCase() + field.slice(1)),
          type: 'submit'
        });
      });
  }

  validateName = e => {
    let name = e.target.value;
    let feedback = Feedback['name'][0];
    let isNameValid = true;
    if (name === '') {
      feedback = Feedback['name'][1];
      isNameValid = false;
    }
    else if (!name.match(/^[A-Za-z]+$/)) {
      feedback = Feedback['name'][2];
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

    this.setState({
      displayNameFeedback: feedback,
      isDisplayNameValid: isFieldValid,
    });
  };

  validateEmail = e => {
    let email = e.target.value;
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+edu/;
    let feedback = Feedback['email'][0];
    let isEmailValid = true;

    if (email === '') {
      feedback = Feedback['email'][1];
      isEmailValid = false;
    }
    else if (!email.match(re)) {
      feedback = Feedback['email'][2];
      isEmailValid = false;
    }

    this.setState({
      emailFeedback: feedback,
      isEmailValid,
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
    let feedback = Feedback['password'][0];
    let isFieldValid = true;

    let validState = {
      lengthReq: true,
      numReq: true,
      charReq: true
    }

    if (password === '') {
      feedback = Feedback['password'][1];
      isFieldValid = false;
    }
    else {
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
        let fb = '';
        if (fbs.includes('lengthReq')) fb += Feedback['password'][2] + '|';
        if (fbs.includes('numReq')) fb += Feedback['password'][3] + '|';
        if (fbs.includes('charReq')) fb += Feedback['password'][4] + '|';
        if (fbs !== '') feedback = this.getPasswordFeedback(fb);
      }
    }

    this.setState({
      passwordFeedback: feedback,
      isPasswordValid: isFieldValid
    });
  };

  validatePassConf = e => {
    let passConf = e.target.value;
    let feedback = Feedback['passConf'][0];
    let isFieldValid = true;

    if (passConf === '') {
      feedback = Feedback['passConf'][1];
      isFieldValid = false;
    }
    else if (!this.state.isPasswordValid) {
      feedback = Feedback['passConf'][2];
      isFieldValid = false;
    }
    else if (passConf !== this.state.password) {
      feedback = Feedback['passConf'][3];
      isFieldValid = false;
    }

    this.setState({
      passConfFeedback: feedback,
      isPassConfValid: isFieldValid
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // this.validateFields();
    await userService.signup(this.state);
    this.props.handleSignupOrLogin();
    this.props.history.push('/signup');
  };

  getPasswordFeedback = (fbs) => {
    fbs = fbs.split('|');
    fbs.pop();
    return <ul>
      {fbs.map(fb =>
        <li key={fb.toString()}>{fb}</li>
      )}
    </ul>;
  }

  ControlGroup = ({ id, labelText, type = 'text' }) => {
    return (
      <Form.Group controlId={id}>
        <Form.Label>{labelText}</Form.Label>
        <Form.Control
          type={type}
          name={id}
          value={this.state[id]}
          onChange={this.handleChange}
          onBlur={this['validate' + id.charAt(0).toUpperCase() + id.slice(1)]}
          isValid={this.state[id + 'Feedback'] && this.state['is' + id.charAt(0).toUpperCase() + id.slice(1) + 'Valid']}
          isInvalid={this.state[id + 'Feedback'] && !this.state['is' + id.charAt(0).toUpperCase() + id.slice(1) + 'Valid']}
        />
        {/* <Form.Control.Feedback type="valid">{this.state[id + 'Feedback']}</Form.Control.Feedback> */}
        <Form.Control.Feedback type="invalid">{this.state[id + 'Feedback']}</Form.Control.Feedback>
      </Form.Group>
    );
  }
  render() {
    return <div>
      {this.props.user ?
        <Container>
          <Link id="int-arrow" to='/events'>  <img src={nextBlueArrow} alt="Submit arrow" /> </Link>

          <div class="row Signup-nav">
            <h2><Link to='/'><img src={backArrow} alt="Back Arrow" /></Link> Sign Up</h2>
            <div id="signup-steps">
              <span>Step 2/2</span>
            </div>
          </div>
          <Card>
            <h4 className="Signup-msg">Select the 4 topics that interest you most.</h4>
            <div class="row-int">
              <div className="column">
                <div className="row overlay">
                  <button>
                    <img id="interest1" className="interstImg" src={interest1} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest2} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest3} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest4} alt="User interest" />
                  </button>
                </div>
              </div>
              <div className="column">
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest1} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest2} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest3} alt="User interest" />
                  </button>
                </div>
                <div className="row">
                  <button>
                    <img className="interstImg" src={interest4} alt="User interest" />
                  </button>
                </div>
              </div>

            </div>

          </Card>
        </Container>

        :

       
      <div>
          <div class="container">
            <div class="row Signup-nav">
              <h2><Link to='/'><img src={backArrow} alt="Back Arrow" /></Link> Sign Up</h2>
              <div id="signup-steps">
                <span>Step 1/2</span>
              </div>
            </div>
          </div>
          <h4 className="Signup-msg">Let's start a new life style here.</h4>
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
                  <this.ControlGroup className="Signup-row" id="displayName" labelText="Username " />
                  <this.ControlGroup className="Signup-row" id="email" labelText="Email" />
                  <this.ControlGroup className="Signup-row" id="password" labelText="Password" type="password" />
                  <this.ControlGroup className="Signup-row" id="passConf" labelText="Confirm Password" type="password" />
                  <div style={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                  }}>
                    <Button className="Signup-btn" variant="outline-success" onClick={this.handleSubmit}>
                      <img src={nextBlueArrow} alt="Submit arrow" />
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Container>
        </div>
      }
    </div>
  }
}

const Feedback = {
  'displayName': [
    'Looks good.',
    'This field is required.',
    'The name is too short',
    'This name contains invalid characters.',
    'This name contains inappropriate language.'
  ],
  'email': [
    'Looks good.',
    'This field is required.',
    'Please enter your valid school email address ending in .edu.',
    'This email has already been taken.'
  ],
  'password': [
    'Looks good.',
    'This field is required.',
    'Must contain a minimum of 6 characters',
    'Must contain both uppercase and lowercase letters.',
    'Must contain at least one number.'
  ],
  'passConf': [
    'Looks good.',
    'This field is required.',
    'The password is invalid',
    'The confirmation does not match the entered password.'
  ]
};

export default SignupPage;