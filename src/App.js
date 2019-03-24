import React from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage"
import RegisterPage from "./components/RegisterPage/RegisterPage"
import LoginPage from "./components/LoginPage/LoginPage"
import UpdatePage from "./components/UpdatePage/UpdatePage"
import IncludePage from "./components/IncludePage/IncludePage"
import HistoryPage from "./components/HistoryPage/HistoryPage"
import AccessControlPage from "./components/AccessControlPage/AccessControlPage"
import Logout from "./components/Logout/Logout"
import Auth from "./stores/auth";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Auth.loggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

// Followed https://github.com/gothinkster/react-mobx-realworld-example-app
// To adopt mobx faster later on
export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/logout" component={Logout} />
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/orders/include" component={IncludePage} />
          <PrivateRoute path="/orders/:id/update" component={UpdatePage} />
          <PrivateRoute path="/orders/:id/history" component={HistoryPage} />
          <PrivateRoute path="/orders/:id/access" component={AccessControlPage} />
        </Switch>
      </HashRouter>
    );
  }
}