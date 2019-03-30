import React from "react";
import { Spinner } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

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
      status: "",
      isUpdate:false
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
        this.setState({ isUpdate: true });
        await api.updateOrder(this.state.guid, this.state);
        this.setState({ isUpdate: false });
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
        <Container>
        <h3> Update Coffee</h3>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            <Row>
              <Col xs="4">Id</Col>
              <Col>
                <FormControl
                  placeholder={this.state.id}
                  name="id"
                  onChange={this.handleChange}/>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Producer</Col>
              <Col>
                <FormControl
                  placeholder={this.state.producer}
                  name="producer"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Farm</Col>
              <Col>
                <FormControl
                  placeholder={this.state.farm}
                  name="farm"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Elevation</Col>
              <Col>
                <FormControl
                  placeholder={this.state.elevation}
                  name="elevation"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Variety</Col>
              <Col>
                <FormControl
                  placeholder={this.state.variety}
                  name="variety"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Process</Col>
              <Col>
                <FormControl
                  placeholder={this.state.process}
                  name="process"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Quantity</Col>
              <Col>
                <FormControl
                  placeholder={this.state.quantity}
                  name="quantity"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">QC</Col>
              <Col>
                <FormControl
                  placeholder={this.state.qc}
                  name="qc"
                  onChange={this.handleChange}/>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Tasting Notes</Col>
              <Col>
                <FormControl
                  placeholder={this.state.tastingNotes}
                  name="tastingNotes"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs="4">Status</Col>
              <Col>
                <FormControl
                  placeholder={this.state.status}
                  name="status"
                  onChange={this.handleChange}/> 
              </Col>
            </Row>
            <br/>
            <Button variant="success" onClick={this.handleUpateOrder} block>Update</Button>
            <br/>
          </div>
        }
        </Container>

        <Modal show={this.state.isUpdate} onHide={()=>{}} >
          <Modal.Body>
            <Spinner animation="border" variant="primary" />
            &nbsp;	&nbsp;	&nbsp;Now Updating 
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default UpdatePage;