import React from "react";
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
      const orders = await api.getOrders();
      const order = orders.filter(o => o.guid === this.props.match.params.id)[0];
      this.setState({
        guid: order.guid,
        id: order.data.id
      });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <h3>Coffee id: {this.state.id}</h3>
        <QRCode value={this.state.guid} />
      </div>
    );
  }
}

export default UpdatePage;