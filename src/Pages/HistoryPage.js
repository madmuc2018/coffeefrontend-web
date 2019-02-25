import React, { Component } from "react";
import CoffeeListHistoryPage from "../components/CoffeeListHistoryPage";
import MyNavBar from "../components/MyNavBar";
import MyFooter from "../components/MyFooter";

class HistoryPage extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <CoffeeListHistoryPage />
        <MyFooter />
      </div>
    );
  }
}

export default HistoryPage;
