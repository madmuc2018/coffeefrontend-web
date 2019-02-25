import React, { Component } from "react";
import GrantAccessForm from "../components/GrantAccessForm.js";
import RevokeAccessForm from "../components/RevokeAccessForm.js";
import AuthorizedUsers from "../components/AuthorizedUsers.js";
import MyNavBar from "../components/MyNavBar";
import MyFooter from "../components/MyFooter";

class AccessControlPage extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <p className="mainContentTitle" />
        <h3 className="mainContentTitle"> Access Control</h3>
        <h6 className="mainContentSubtitle" style={{ fontSize: 11 }}>
          Coffee Id:
        </h6>
        <GrantAccessForm />
        <RevokeAccessForm />
        <AuthorizedUsers />
        <MyFooter />
      </div>
    );
  }
}

export default AccessControlPage;
