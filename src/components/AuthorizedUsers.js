import React from "react";
import "../style.css";

class AuthorizedUsers extends React.Component {
  constructor() {
    super();
    const initialInfo = this.getAuthorizedUsers(123);
    this.state = {
      authorizedUsersList: initialInfo
    };
    this.getAuthorizedUsers = this.getAuthorizedUsers.bind(this);
  }

  getAuthorizedUsers(guid) {
    const info = ["a@a.ca", "b@b.ca", "c@c.ca"];
    return info;
  }

  render() {
    return (
      <div>
        <p className="mainContentTitle" />
        <h5 className="mainContentSubtitle"> Authorized Users</h5>
        <ul className="mainContentList">
          {this.state.authorizedUsersList.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
        <p className="mainContentTitle" />
      </div>
    );
  }
}

export default AuthorizedUsers;
