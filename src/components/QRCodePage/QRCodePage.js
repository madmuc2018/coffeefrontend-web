import React from "react";
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import QRCode from 'qrcode.react';
import { Container } from 'react-bootstrap';
import AsyncAwareContainer from '../AsyncAwareContainer';

class QRCodePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guid: "",
      id: ""
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: 'Generating QR code'});
      const orders = await api.getOrders();
      const order = orders.filter(o => o.guid === this.props.match.params.id)[0];
      this.setState({
        guid: order.guid,
        id: order.data.id
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
          <h3>Coffee id: {this.state.id}</h3>
          <AsyncAwareContainer loading={this.state.loading}>
            <QRCode value={this.state.guid} />
          </AsyncAwareContainer>
        </Container>
      </div>
    );
  }
}

export default QRCodePage;