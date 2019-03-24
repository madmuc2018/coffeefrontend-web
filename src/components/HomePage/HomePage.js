import React, { Component } from "react";
import api from "../../Data/api";
import { Link } from 'react-router-dom'

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
        <h1>Inventory</h1>
        {this.state.orders.map(o =>
          <div key={o.guid}>
            <p> Id: {o.data.id} </p>
            <p> Producer: {o.data.producer} </p>
            <p> Variety: {o.data.variety} </p>
            <p> Quantity: {o.data.quantity} </p>
            <p> Status: {o.data.status} </p>
            <Link to={`/orders/${o.guid}/update`} replace > Update</Link>
            <Link to={`/orders/${o.guid}/history`}>History</Link>
            <Link to={`/orders/${o.guid}/qr`}>QR Code</Link>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;