import React, { Component } from "react";
import { Card, ListGroup, Container, Alert } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import AsyncAwareContainer from '../AsyncAwareContainer';

class HistoryPage extends Component {
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
        versions
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
          <h1>History</h1>
          <AsyncAwareContainer loading={this.state.loading}>
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
          </AsyncAwareContainer>
        </Container>
      </div>
    );
  }
}

export default HistoryPage;