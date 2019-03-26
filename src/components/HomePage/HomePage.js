import React, { Component } from "react";
import api from "../../Data/api";
import { Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MyNavBar from '../MyNavBar';

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
        orders,
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
        <h1>Inventory</h1>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            <input
              placeholder="Search by ID"
              name="filterer"
              onChange={this.handleFilter}
            />
            <br/>
            {this.state.orders
              .filter(o => {
                const keyword = this.state.filterer;
                return keyword.length === 0 ? true : o.data.id.trim().toLowerCase().includes(keyword);
              })
              .map(o =>
              <div key={o.guid}>
                <p> Id: {o.data.id} </p>
                <p> Producer: {o.data.producer} </p>
                <p> Variety: {o.data.variety} </p>
                <p> Quantity: {o.data.quantity} </p>
                <p> Status: {o.data.status} </p>
                <LinkContainer to={`/orders/${o.guid}/update`}>
                  <Button>Update</Button>
                </LinkContainer>
                <LinkContainer to={`/orders/${o.guid}/history`}>
                  <Button>History</Button>
                </LinkContainer>
                <LinkContainer to={`/orders/${o.guid}/qr`}>
                  <Button>QRCode</Button>
                </LinkContainer>
                <LinkContainer to={`/orders/${o.guid}/access`}>
                  <Button>Access Control</Button>
                </LinkContainer>
                <hr />
              </div>
            )}
          </div>
        }
        
      </div>
    );
  }
}

export default HomePage;