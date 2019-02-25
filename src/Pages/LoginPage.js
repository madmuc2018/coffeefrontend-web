import React, { Component } from "react";
import MyFooter from "../components/MyFooter";
import LoginForm from "../components/LoginForm";
import InitialNavBar from "../components/InitialNavBar";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <InitialNavBar />
        <LoginForm />
        <MyFooter />
      </div>
    );
  }
}

export default LoginPage;
