import React, { Component } from "react";
import MyFooter from "../components/MyFooter";
import RegisterForm from "../components/RegisterForm";
import InitialNavBar from "../components/InitialNavBar";

class RegisterPage extends Component {
  render() {
    return (
      <div>
        <InitialNavBar />
        <RegisterForm />
        <MyFooter />
      </div>
    );
  }
}

export default RegisterPage;
