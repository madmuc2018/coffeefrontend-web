import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";
import FormRow from '../FormRow';
import MyAuthNavBar from '../MyAuthNavBar';
import AsyncAwareContainer from '../AsyncAwareContainer';
import { Button, Container } from "react-bootstrap";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    if (Auth.loggedIn()) {
      this.props.history.replace("/");
    }

    this.state = {
      email: "test1@test.com",
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
        this.setState({loading: 'Registering'});
        await api.register(this.state.email, this.state.password, this.state.role);
        this.props.history.replace("/login");
      } catch (error) {
        alert(error);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }
  }

  componentWillUnmount() {
    this.componentUnmounted = true;
  }

  render() {
    return (
      <div>
        <MyAuthNavBar/>
        <Container>
          <h3>Register</h3>
          <AsyncAwareContainer loading={this.state.loading}>
            <FormRow name="email" onChange={this.handleChange} />
            <FormRow name="password" type="password" onChange={this.handleChange} />
            <FormRow name="role" onChange={this.handleChange} />
            <Button onClick={this.handleRegister}>Register</Button>
          </AsyncAwareContainer>
        </Container>
      </div>
    );
  }
}

export default RegisterPage;