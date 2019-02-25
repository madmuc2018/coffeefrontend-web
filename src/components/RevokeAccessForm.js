import React from "react";
import "../style.css";

class RevokeAccessForm extends React.Component {
  constructor() {
    super();
    this.state = {
      authorizedUsers: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // TO-DO submit data to the backend
    console.log("form submitted");
  }

  render() {
    return (
      <div>
        <p className="mainContentTitle" />
        <h5 className="mainContentSubtitle"> Revoke Access</h5>
        <form className="mainContentForm" onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />{" "}
            Email
          </label>
          <p style={{ fontSize: 5 }} />
          <input
            type="submit"
            value="Revoke Access"
            style={{ color: "#616768" }}
          />
        </form>
      </div>
    );
  }
}

export default RevokeAccessForm;
