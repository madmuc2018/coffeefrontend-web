import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import RegisterReq from "../RestService/RegisterReq";

class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      role: ""
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
    RegisterReq({
      username: this.state.username,
      password: this.state.password,
      role: this.state.password
    });
  }

  render() {
    return (
      <div>
        <p className="mainContentTitle" />
        <h3 className="mainContentTitle"> Register</h3>
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
          <label>
            <input
              type="text"
              value={this.state.role}
              name="role"
              onChange={this.handleChange}
            />{" "}
            Role
          </label>
          <p />
          <input type="submit" value="Register" style={{ color: "#616768" }} />
          <Link to="/login" className="registerLink">
            {" "}
            You can login here!
          </Link>
          <p />
          <p />
        </form>
      </div>
    );
  }
}

export default RegisterForm;
