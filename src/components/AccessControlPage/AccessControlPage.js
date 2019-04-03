import React, { Component } from "react";
import { Button , FormControl, Container, Col, Row  } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import AsyncAwareContainer from '../AsyncAwareContainer';

class AccessControlPage extends Component {
  constructor() {
    super();

    this.state = {
      id: "",
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
        this.setState({loading: 'Granting access'});
        await api.grantAccess(this.props.match.params.id, [this.state.userToBeGranted]);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({
          grantedUsers
        });
      } catch (error) {
        alert(error);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }

    this.handleRevoke = async event => {
      try {
        this.setState({loading: 'Revoking access'});
        await api.revokeAccess(this.props.match.params.id, this.state.userToBeRevoked);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({
          grantedUsers
        });
      } catch (error) {
        alert(error);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
      const id = (await api.getOrders()).filter(o => o.guid === this.props.match.params.id)[0].data.id;
      this.setState({
        id,
        grantedUsers
      });
    } catch (error) {
      alert(error);
    } finally {
      if (!this.componentUnmounted)
        this.setState({loading: undefined});
    }
  }

  componentWillUnmount() {
    this.componentUnmounted = true;
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <Container>
          <h1>Access control</h1>
          <AsyncAwareContainer loading={this.state.loading}>
            <h6> Coffee Id: {this.state.id}</h6>
            <h6> Authorized Users</h6>
            {this.state.grantedUsers.map(u => <p>{u}</p>)}
            <br/>
            <h5>Grant Access</h5>
            <EmailRow name="userToBeGranted" onChange={this.handleChange} onClick={this.handleGrant} />
            <h5> Revoke Access </h5>
            <EmailRow name="userToBeRevoked" onChange={this.handleChange} onClick={this.handleRevoke} />
          </AsyncAwareContainer>
        </Container>
      </div>
    );
  }
}

class EmailRow extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="2">Email</Col>
          <Col xs="10">
            <FormControl
              placeholder="Email"
              name={this.props.name}
              onChange={this.props.onChange}/>
          </Col>
        </Row>
        <br/>
        <Button onClick={this.props.onClick} size="sm">Grant</Button>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default AccessControlPage;