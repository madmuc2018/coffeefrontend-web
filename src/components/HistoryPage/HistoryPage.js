import React, { Component } from "react";
import { Spinner, Alert } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      versions: []
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const versions = await api.getHistory(this.props.match.params.id);
      this.setState({
        versions,
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
        <h1>History</h1>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            {this.state.versions.map(o =>
              <div key={o.id}>
                <Card>
                  <Card.Body>
                    <Card.Title > <Alert variant="info"> ID: {o.id} </Alert></Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item> Producer: {o.producer} </ListGroup.Item>
                      <ListGroup.Item> Farm: {o.farm} </ListGroup.Item>
                      <ListGroup.Item> Elevation: {o.elevation} </ListGroup.Item>
                      <ListGroup.Item> Variety: {o.variety} </ListGroup.Item>
                      <ListGroup.Item> Process: {o.process} </ListGroup.Item>
                      <ListGroup.Item> Quantity: {o.quantity} </ListGroup.Item>
                      <ListGroup.Item> QC: {o.qc} </ListGroup.Item>
                      <ListGroup.Item> Tasting Notes: {o.tastingNotes} </ListGroup.Item>
                      <ListGroup.Item> Status: {o.status} </ListGroup.Item>
                      <ListGroup.Item> Last changed at: {o.lastChangedAt} </ListGroup.Item>
                      <ListGroup.Item> Last changed by: {o.lastChangedBy} </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
              </Card>
              <br/>
              </div>
            )}
          </div>
        }
        </Container>
      </div>
    );
  }
}

export default HomePage;