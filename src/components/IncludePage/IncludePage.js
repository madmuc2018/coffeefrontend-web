import React from "react";
import api from "../../Data/api";

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
      tastingNotes: ""
    };


    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.handleIncludeOrder = async event => {
      try {
        await api.addOrder(this.state);
        this.props.history.replace("/");
      } catch (error) {
        alert(error);
      }
    }
  }

  render() {
    return (
      <div>
        <h3> Include Coffee</h3>
        <input
          placeholder={this.state.id}
          name="id"
          onChange={this.handleChange}
        />Id
        <br/>
        <input
          placeholder={this.state.producer}
          name="producer"
          onChange={this.handleChange}
        />Producer
        <br/>
        <input
          placeholder={this.state.farm}
          name="farm"
          onChange={this.handleChange}
        />Farm
        <br/>
        <input
          placeholder={this.state.elevation}
          name="elevation"
          onChange={this.handleChange}
        />Elevation
        <br/>
        <input
          placeholder={this.state.variety}
          name="variety"
          onChange={this.handleChange}
        />Variety
        <br/>
        <input
          placeholder={this.state.process}
          name="process"
          onChange={this.handleChange}
        />Process
        <br/>
        <input
          placeholder={this.state.quantity}
          name="quantity"
          onChange={this.handleChange}
        />Quantity
        <br/>
        <input
          placeholder={this.state.qc}
          name="qc"
          onChange={this.handleChange}
        />QC
        <br/>
        <input
          placeholder={this.state.tastingNotes}
          name="tastingNotes"
          onChange={this.handleChange}
        />Tasting Notes
        <br/>
        <button onClick={this.handleIncludeOrder}>Include</button>
      </div>
    );
  }
}

export default IncludePage;