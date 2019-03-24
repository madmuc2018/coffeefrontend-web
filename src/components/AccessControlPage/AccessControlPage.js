import React, { Component } from "react";
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';

class AccessControlPage extends Component {
  constructor() {
    super();

    this.state = {
      grantedUsers: [],
      userToBeGranted: "",
      userToBeRevoked: ""
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleGrant = async event => {
      try {
        await api.grantAccess(this.props.match.params.id, [this.state.userToBeGranted]);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({grantedUsers});
      } catch (error) {
        alert(error);
      }
    }

    this.handleRevoke = async event => {
      try {
        await api.revokeAccess(this.props.match.params.id, this.state.userToBeRevoked);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({grantedUsers});
      } catch (error) {
        alert(error);
      }
    }
  }

  async componentDidMount() {
    try {
      const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
      console.log(grantedUsers);
      this.setState({grantedUsers});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <h1>Access control</h1>
        <h6> Coffee Id: </h6>
        <h5> Authorized Users</h5>
        {this.state.grantedUsers.map(u => <p>{u}</p>)}
        <h5> Grant Access</h5>
        <input
          placeholder="Email"
          name="userToBeGranted"
          onChange={this.handleChange}
        />Email
        <button onClick={this.handleGrant}>Grant</button>
        <h5> Revoke Access </h5>
        <input
          placeholder="Email"
          name="userToBeRevoked"
          onChange={this.handleChange}
        />Email
        <button onClick={this.handleRevoke}>Revoke</button>
      </div>
    );
  }
}

export default AccessControlPage;