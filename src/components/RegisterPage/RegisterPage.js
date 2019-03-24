import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";

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
        <h3>Register</h3>
        <input
          name="username"
          onChange={this.handleChange}
        /> Email
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
        /> Password
        <input
          name="role"
          onChange={this.handleChange}
        /> Role
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default RegisterPage;