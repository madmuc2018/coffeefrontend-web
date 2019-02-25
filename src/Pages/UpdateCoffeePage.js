import React, { Component } from "react";
import UpdateCoffeeForm from "../components/UpdateCoffeeForm.js";
import MyNavBar from "../components/MyNavBar";
import MyFooter from "../components/MyFooter";

class UpdateCoffeePage extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <UpdateCoffeeForm />
        <MyFooter />
      </div>
    );
  }
}

export default UpdateCoffeePage;
