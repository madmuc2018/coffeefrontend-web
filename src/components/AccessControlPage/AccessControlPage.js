import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import { Button } from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

class AccessControlPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      grantedUsers: [],
      userToBeGranted: "",
      userToBeRevoked: "",
      id:"",
      isUpdate:false
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleGrant = async event => {
      try {
        this.setState({ isUpdate: true });
        await api.grantAccess(this.props.match.params.id, [this.state.userToBeGranted]);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({grantedUsers});
        this.setState({ isUpdate: false });
      } catch (error) {
        this.setState({ isUpdate: false });
        alert(error);
      }
    }

    this.handleRevoke = async event => {
      try {
        this.setState({ isUpdate: true });
        await api.revokeAccess(this.props.match.params.id, this.state.userToBeRevoked);
        const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
        this.setState({grantedUsers});
        this.setState({ isUpdate: false });
      } catch (error) {
        this.setState({ isUpdate: false });
        alert(error);
      }
    }
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const grantedUsers = await api.getAccessInfo(this.props.match.params.id);
      this.setState({
        grantedUsers,
        loading: undefined
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <Container>
        <h1>Access control</h1>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            <h6> Coffee Id: {this.state.id}</h6>
            <h6> Authorized Users</h6>
            {this.state.grantedUsers.map(u => <p>{u}</p>)}
            <br/> 
            <h5>Grant Access</h5>
            <Row>
              <Col xs="2">Email</Col>
              <Col xs="10">
                <FormControl
                  placeholder="Email"
                  name="userToBeGranted"
                  onChange={this.handleChange}/>
              </Col>
            </Row>
            <br/>
            <Button onClick={this.handleGrant} size="sm">Grant</Button>
            <br/>
            <br/>
            <br/>
            <h5> Revoke Access </h5>
            <Row>
              <Col xs="2">Email</Col>
              <Col xs="10">
                <FormControl
                  placeholder="Email"
                  name="userToBeRevoked"
                  onChange={this.handleChange}/>
              </Col>
            </Row>
            <br/>
            <Button onClick={this.handleRevoke} size="sm">Revoke</Button>
          </div>
        }
        </Container>

        <Modal show={this.state.isUpdate} onHide={()=>{}} >
          <Modal.Body>
            <Spinner animation="border" variant="primary" />
            &nbsp;	&nbsp;	&nbsp;Now Updating 
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default AccessControlPage;