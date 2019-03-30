import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";
import MyAuthNavBar from '../MyAuthNavBar';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    if (Auth.loggedIn()) {
      this.props.history.replace("/");
    }

    this.state = {
      username: "test1@test.com",
      password: "123",
      role: "",
      isUpdate:false
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleRegister = async event => {
      try {
        this.setState({ isUpdate: true });
        await api.register(this.state.username, this.state.password, this.state.role);
        this.setState({ isUpdate: false });
        this.props.history.replace("/login");
      } catch (error) {
        this.setState({ isUpdate: false });
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

        <Modal show={this.state.isUpdate} onHide={()=>{}} >
          <Modal.Body>
            <Spinner animation="border" variant="primary" />
            &nbsp;	&nbsp;	&nbsp;Now Registering 
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default RegisterPage;