import React, { Component } from "react";
import api from "../../Data/api";
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MyNavBar from '../MyNavBar';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      orders: []
    };
  }

  async componentDidMount() {
    try {
      const orders = await api.getOrders();
      this.setState({orders});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <h1>Inventory</h1>
        {this.state.orders.map(o =>
          <div key={o.guid}>
            <p> Id: {o.data.id} </p>
            <p> Producer: {o.data.producer} </p>
            <p> Variety: {o.data.variety} </p>
            <p> Quantity: {o.data.quantity} </p>
            <p> Status: {o.data.status} </p>
            <LinkContainer to={`/orders/${o.guid}/update`} replace>
              <Button>Update</Button>
            </LinkContainer>
            <LinkContainer to={`/orders/${o.guid}/history`} replace>
              <Button>History</Button>
            </LinkContainer>
            <LinkContainer to={`/orders/${o.guid}/qr`} replace>
              <Button>QRCode</Button>
            </LinkContainer>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;