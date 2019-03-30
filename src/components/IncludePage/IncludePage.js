import React from "react";
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class IncludePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      producer: "",
      farm: "",
      elevation: "",
      variety: "",
      process: "",
      quantity: "",
      qc: "",
      tastingNotes: "",
      isUpdate:false
    };


    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleIncludeOrder = async event => {
      try {
        this.setState({ isUpdate: true });
        await api.addOrder(this.state);
        this.setState({ isUpdate: false });
        this.props.history.replace("/");
      } catch (error) {
        this.setState({ isUpdate: false });
        alert(error);
      }
    }
  }

  render() {
    return (
      <div>
        <MyNavBar/>
        <Container>
        <h3> Include Coffee</h3>
        <br/>

        <Row>
          <Col xs="3">Id</Col>
          <Col>
            <FormControl
                  placeholder={this.state.id}
                  name="id"
                  onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Producer</Col>
          <Col>
            <FormControl
                  placeholder={this.state.producer}
                  name="producer"
                  onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
        <Col xs="3">Farm</Col>
        <Col><FormControl
                  placeholder={this.state.farm}
                  name="farm"
                  onChange={this.handleChange}/>
        </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Elevation</Col>
          <Col><FormControl
                    placeholder={this.state.elevation}
                    name="elevation"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Variety</Col>
          <Col><FormControl
                    placeholder={this.state.variety}
                    name="variety"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Process</Col>
          <Col><FormControl
                    placeholder={this.state.process}
                    name="process"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">Quantity</Col>
          <Col><FormControl
                    placeholder={this.state.quantity}
                    name="quantity"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col xs="3">QC</Col>
          <Col><FormControl
                    placeholder={this.state.qc}
                    name="qc"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Row>
        <Col xs="3">Tasting Notes</Col>
          <Col><FormControl
                    placeholder={this.state.tastingNotes}
                    name="tastingNotes"
                    onChange={this.handleChange}/>
          </Col>
        </Row>
        <br/>
        <Button onClick={this.handleIncludeOrder} block>Include</Button>
        <br/>
        </Container>

        <Modal show={this.state.isUpdate} onHide={()=>{}} >
          <Modal.Body>
            <Spinner animation="border" variant="primary" />
            &nbsp;	&nbsp;	&nbsp;Now Including
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default IncludePage;