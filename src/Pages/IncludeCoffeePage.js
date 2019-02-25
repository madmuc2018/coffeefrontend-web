import React, { Component } from "react";
import IncludeCoffeeForm from "../components/IncludeCoffeeForm.js";
import MyNavBar from "../components/MyNavBar";
import MyFooter from "../components/MyFooter";

class IncludeCoffeePage extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <IncludeCoffeeForm />
        <MyFooter />
      </div>
    );
  }
}

export default IncludeCoffeePage;
