import React from "react";
import api from "../../Data/api";
import FormRow from '../FormRow';
import MyNavBar from '../MyNavBar';
import AsyncAwareContainer from '../AsyncAwareContainer';
import { Container, Button} from 'react-bootstrap';

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
        this.setState({loading: 'Updating order'});
        await api.updateOrder(this.state.guid, this.state);
        this.props.history.replace("/");
      } catch (error) {
        alert(error);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const orders = await api.getOrders();
      const order = orders.filter(o => o.guid === this.props.match.params.id)[0];
      this.setStateOrder(order.guid, order.data);
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
          <h3> Update Coffee</h3>
            <AsyncAwareContainer loading={this.state.loading}>
              <FormRow name="id" placeholder={this.state.id} onChange={this.handleChange} />
              <FormRow name="producer" placeholder={this.state.producer} onChange={this.handleChange} />
              <FormRow name="farm" placeholder={this.state.farm} onChange={this.handleChange} />
              <FormRow name="elevation" placeholder={this.state.elevation} onChange={this.handleChange} />
              <FormRow name="variety" placeholder={this.state.variety} onChange={this.handleChange} />
              <FormRow name="process" placeholder={this.state.process} onChange={this.handleChange} />
              <FormRow name="quantity" placeholder={this.state.quantity} onChange={this.handleChange} />
              <FormRow name="qc" placeholder={this.state.qc} onChange={this.handleChange} />
              <FormRow name="tastingNotes" placeholder={this.state.tastingNotes} onChange={this.handleChange} />
              <FormRow name="status" placeholder={this.state.status} onChange={this.handleChange} />
              <Button onClick={this.handleUpateOrder}>Update</Button>
            </AsyncAwareContainer>
          </Container>
      </div>
    );
  }
}

export default UpdatePage;