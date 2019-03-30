import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";
import MyAuthNavBar from '../MyAuthNavBar';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    if (Auth.loggedIn()) {
      this.props.history.replace("/");
    }

    this.state = {
      username: "test1@test.com",
      password: "123"
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleLogin = async event => {
      try {
        Auth.setToken(await api.login(this.state.username, this.state.password));
        this.props.history.replace("/");
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
        <h3>Login</h3>
        <br/>
        <Row>
          <Col xs="3">Email</Col>
          <Col>
            <FormControl
              type="text"
              value={this.state.username}
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
              value={this.state.password}
              name="password"
              onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Button onClick={this.handleLogin}>Log in</Button>
        </Container>
      </div>
    );
  }
}

export default LoginPage;