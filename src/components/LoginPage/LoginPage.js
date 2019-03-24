import React from "react";
import Auth from "../../stores/auth";
import api from "../../Data/api";

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
        <h3>Login</h3>
        <input
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.handleChange}
        /> Email
        <input
          type="text"
          value={this.state.password}
          name="password"
          onChange={this.handleChange}
        /> Password
        <button onClick={this.handleLogin}>Log in</button>
      </div>
    );
  }
}

export default LoginPage;