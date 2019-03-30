import React from "react";
import { Spinner } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import QRCode from 'qrcode.react';

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guid: "",
      id: ""
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const orders = await api.getOrders();
      const order = orders.filter(o => o.guid === this.props.match.params.id)[0];
      this.setState({
        guid: order.guid,
        id: order.data.id,
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
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            <h3>Coffee id: {this.state.id}</h3>
            <QRCode value={this.state.guid} />
          </div>
        }
      </div>
    );
  }
}

export default UpdatePage;