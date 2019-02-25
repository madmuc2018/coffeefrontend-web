import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class MyNavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul style={{ listStyle: "none" }}>
          <li />
          <li />
        </ul>
        <img
          src={logo}
          alt="logo"
          style={{
            width: 200,
            height: 200,
            resizeMode: "cover"
          }}
        />
        <ul style={{ listStyle: "none" }}>
          <li>
            <NavLink to="/home"> Home</NavLink>
          </li>
          <li>
            <NavLink to="/includecoffee"> Include Coffee</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const NavLink = props => (
  <li>
    <Link {...props} style={{ textDecoration: "none", color: "white" }} />
  </li>
);

export default MyNavBar;
