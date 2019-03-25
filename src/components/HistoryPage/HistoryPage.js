import React, { Component } from "react";
import { Spinner } from 'react-bootstrap';
import api from "../../Data/api";
import MyNavBar from '../MyNavBar';

class HomePage extends Component {
  constructor() {
    super();

    this.state = {
      versions: []
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true});
      const versions = await api.getHistory(this.props.match.params.id);
      this.setState({
        versions,
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
        <h1>History</h1>
        {
          this.state.loading ? (<Spinner animation="border" variant="primary" />) :
          <div>
            {this.state.versions.map(o =>
              <div key={o.id}>
                <p/> Id: {o.id} 
                <br/>
                <p/> Producer: {o.producer} 
                <br/>
                <p/> Farm: {o.farm} 
                <br/>
                <p/> Elevation: {o.elevation} 
                <br/>
                <p/> Variety: {o.variety} 
                <br/>
                <p/> Process: {o.process} 
                <br/>
                <p/> Quantity: {o.quantity} 
                <br/>
                <p/> QC: {o.qc} 
                <br/>
                <p/> Tasting Notes: {o.tastingNotes} 
                <br/>
                <p/> Status: {o.status} 
                <br/>
                <p/> Last changed at: {o.lastChangedAt} 
                <br/>
                <p/> Last changed by: {o.lastChangedBy} 
                <br/>
              </div>
            )}
          </div>
        }
      </div>
    );
  }
}

export default HomePage;