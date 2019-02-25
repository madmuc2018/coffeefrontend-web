import React from "react";
import "../style.css";
import { Link, Redirect } from "react-router-dom";
import LoginReq from "../RestService/LoginReq";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { err, loginresponse } = LoginReq({
      username: this.state.username,
      password: this.state.password
    });
    //if the login request is successful...
    //<Redirect to="/home" push />;
  }

  onChange;

  render() {
    const ifLogedOff = (
      <div>
        <p className="mainContentTitle" />
        <h3 className="mainContentTitle"> Login</h3>
        <form className="mainContentForm" onSubmit={this.handleSubmit}>
          <p />
          <label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            />{" "}
            Email
          </label>
          <label>
            <input
              type="text"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />{" "}
            Password
          </label>
          <p />
          <input type="submit" value="Log in" style={{ color: "#616768" }} />
          <Link to="/register" className="registerLink">
            {" "}
            You can register here!
          </Link>
          <p />
          <p />
        </form>
      </div>
    );

    return ifLogedOff;
  }
}

export default LoginForm;
