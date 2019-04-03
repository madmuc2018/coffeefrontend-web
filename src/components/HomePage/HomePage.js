import React, { Component } from "react";
import api from "../../Data/api";
import { Button, Container, Card, ListGroup, InputGroup, FormControl, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MyNavBar from '../MyNavBar';
import AsyncAwareContainer from '../AsyncAwareContainer';


class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      orders: [],
      filterer: ""
    };

    this.handleFilter = event => {
      const { value } = event.target;
      this.setState({
        filterer: value.trim().toLowerCase()
      });
    }
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const orders = await api.getOrders();
      this.setState({
        orders
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
          <h1>Inventory</h1>
          <AsyncAwareContainer loading={this.state.loading}>
            <InputGroup>
              <FormControl
                placeholder="Search by ID"
                name="filterer"
                onChange={this.handleFilter}/>
            </InputGroup>
            <br/>
            {this.state.orders
              .filter(o => {
                const keyword = this.state.filterer;
                return keyword.length === 0 ? true : o.data.id.trim().toLowerCase().includes(keyword);
              })
              .map(o =>
                <Card key={o.guid}>
                  <Card.Body>
                    <Card.Title> ID: {o.data.id} </Card.Title>
                    <ListGroup variant="flush">
                      <ListGroup.Item> Producer: {o.data.producer} </ListGroup.Item>
                      <ListGroup.Item> Variety: {o.data.variety} </ListGroup.Item>
                      <ListGroup.Item> Quantity: {o.data.quantity} </ListGroup.Item>
                      <ListGroup.Item> Status: {o.data.status} </ListGroup.Item>
                    </ListGroup>
                    <Row>
                      <LinkContainer to={`/orders/${o.guid}/update`} replace>
                        <Button variant='success' size="sm" block>Update</Button>
                      </LinkContainer>

                      <LinkContainer to={`/orders/${o.guid}/history`} replace>
                        <Button variant='info' size="sm" block>History</Button>
                      </LinkContainer>

                      <LinkContainer to={`/orders/${o.guid}/qr`} replace>
                        <Button variant='info' size="sm" block>QRCode</Button>
                      </LinkContainer>

                      <LinkContainer to={`/orders/${o.guid}/access`} replace>
                        <Button variant='info' size="sm" block>Access Control</Button>
                      </LinkContainer>
                    </Row>
                  </Card.Body>
                </Card>
            )}
          </AsyncAwareContainer>
        </Container>
      </div>
    );
  }
}

export default HomePage;