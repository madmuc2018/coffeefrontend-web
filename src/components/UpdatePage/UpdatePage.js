import React from "react";
import { Spinner } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guid: "",
      id: "",
      producer: "",
      farm: "",
      elevation: "",
      variety: "",
      process: "",
      quantity: "",
      qc: "",
      tastingNotes: "",
      status: ""
    };

    this.setStateOrder = (guid, order) => {
      this.setState({
        guid: guid,
        id: order.id,
        producer: order.producer,
        farm: order.farm,
        elevation: order.elevation,
        variety: order.variety,
        process: order.process,
        quantity: order.quantity,
        qc: order.qc,
        tastingNotes: order.tastingNotes,
        status: order.status
      });
    }

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleUpateOrder = async event => {
      try {
        await api.updateOrder(this.state.guid, this.state);
        this.props.history.replace("/");
      } catch (error) {
        alert(error);
      }
    }
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const orders = await api.getOrders();
      const order = orders.filter(o => o.guid === this.props.match.params.id)[0];
      this.setStateOrder(order.guid, order.data);
      this.setState({loading: undefined});
    } catch (error) {
      alert(error);
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <h3> Update Coffee</h3>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            <input
              placeholder={this.state.id}
              name="id"
              onChange={this.handleChange}
            /> Id
            <br/>
            <input
              placeholder={this.state.producer}
              name="producer"
              onChange={this.handleChange}
            /> Producer
            <br/>
            <input
              placeholder={this.state.farm}
              name="farm"
              onChange={this.handleChange}
            /> Farm
            <br/>
            <input
              placeholder={this.state.elevation}
              name="elevation"
              onChange={this.handleChange}
            /> Elevation
            <br/>
            <input
              placeholder={this.state.variety}
              name="variety"
              onChange={this.handleChange}
            /> Variety
            <br/>
            <input
              placeholder={this.state.process}
              name="process"
              onChange={this.handleChange}
            /> Process
            <br/>
            <input
              placeholder={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
            /> Quantity
            <br/>
            <input
              placeholder={this.state.qc}
              name="qc"
              onChange={this.handleChange}
            /> QC
            <br/>
            <input
              placeholder={this.state.tastingNotes}
              name="tastingNotes"
              onChange={this.handleChange}
            /> Tasting Notes
            <br/>
            <input
              placeholder={this.state.status}
              name="status"
              onChange={this.handleChange}
            /> Status
            <br/>
            <button onClick={this.handleUpateOrder}>Update</button>
          </div>
        }
      </div>
    );
  }
}

export default UpdatePage;