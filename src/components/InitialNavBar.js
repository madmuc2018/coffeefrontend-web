import React from "react";
import "../style.css";
import logo from "./logo.png";

class InitialNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img
          src={logo}
          alt="logo"
          style={{
            width: 200,
            height: 200,
            resizeMode: "cover"
          }}
        />
      </nav>
    );
  }
}

export default InitialNavBar;
