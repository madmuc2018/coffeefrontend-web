import React, { Component } from "react";
import CoffeeListHomePage from "../components/CoffeeListHomePage";
import MyNavBar from "../components//MyNavBar";
import MyFooter from "../components//MyFooter";

class HomePage extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <CoffeeListHomePage />
        <MyFooter />
      </div>
    );
  }
}

export default HomePage;
