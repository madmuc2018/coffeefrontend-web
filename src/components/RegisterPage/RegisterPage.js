import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";
import MyAuthNavBar from '../MyAuthNavBar';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    if (Auth.loggedIn()) {
      this.props.history.replace("/");
    }

    this.state = {
      username: "test1@test.com",
      password: "123",
      role: ""
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleRegister = async event => {
      try {
        await api.register(this.state.username, this.state.password, this.state.role);
        this.props.history.replace("/login");
      } catch (error) {
        alert(error);
      }
    }
  }

  render() {
    return (
      <div>
        <MyAuthNavBar/>
        <Container>
        <h3>Register</h3>
        <br/>
        <Row>
          <Col xs="3">Email</Col>
          <Col>
            <FormControl
              name="username"
              onChange={this.handleChange}/>
          </Col> 
        </Row>
        <br/>
        <Row>
          <Col xs="3">Password</Col>
          <Col>
            <FormControl
              type="password"
              name="password"
              onChange={this.handleChange}/> 
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Role</Col>
            <Col>
            <FormControl
              name="role"
              onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Button onClick={this.handleRegister}>Register</Button>
        </Container>
      </div>
    );
  }
}

export default RegisterPage;