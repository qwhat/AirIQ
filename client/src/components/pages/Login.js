import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container'
import axios from 'axios';

//page not actually defined yet
export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: {
        value: '',
        validation: null
      },
      password: {
        value: '',
        validation: null
      }
    }
  }

  onChange = (e) => {
    let validation;
    if (e.target.name === "phone_number") {
      var validentries1 = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/; // there is a sneaky space being allowed in the valid characters
      if (e.target.value.match(validentries1)) {
        validation = true
        console.log('true')
      } else {
        validation = false
        console.log('false')
      }
    }
    else if (e.target.name === "first_number") {
      var validentries2 =/[A-Z]/g; // there is a sneaky space being allowed in the valid characters
      if (e.target.value.match(validentries2)&& e.target.value.length <= 15) {
        validation = true
      } else {
        validation = false
      }
    }

    this.setState({ [e.target.name]: {value: e.target.value, validation}});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    axios.post('/login', { email: email.value, password: password.value })
      .then((result) => {
        localStorage.setItem('token', result.data.token)
        console.log('server responded');
      })
  }

  validationClass = (isValid) => {
    if(isValid == null) {
      return  "";
    }
    else if (isValid){
      return "valid"
    }
    else {
      return "invalid"
    }

  }

  componentDidMount() {
    console.log("Login Mounted");
  }
  render() {

    const { email, password } = this.state;

    return (
      <Container>
      <Form
        onSubmit={e => this.handleSubmit(e)}
      >
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email.value}
          onChange={this.onChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={password.value}
          onChange={this.onChange}
        />
      </Form.Group>
      <Form.Group controlId="formBasicChecbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    );
  }
}
