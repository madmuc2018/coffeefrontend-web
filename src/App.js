import React, { Component } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import HistoryPage from "./Pages/HistoryPage";
import IncludeCoffeePage from "./Pages/IncludeCoffeePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UpdateCoffeePage from "./Pages/UpdateCoffeePage";
import AccessControlPage from "./Pages/AccessControlPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: ""
    };
  }

  render() {
    return (
      // <LoginPage />
      <Router>
        <div>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/register" render={() => <RegisterPage />} />
          <Route
            exact
            path="/includecoffee"
            render={() => <IncludeCoffeePage />}
          />
          <Route exact path="/home" render={() => <HomePage />} />
          <Route path="/historypage" render={() => <HistoryPage />} />
          <Route path="/updatecoffee" render={() => <UpdateCoffeePage />} />
          <Route path="/acceesscontrol" render={() => <AccessControlPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
