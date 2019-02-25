import React from "react";
import "../style.css";

class UpdateCoffeeForm extends React.Component {
  constructor() {
    super();
    const initialInfo = this.getCoffeeInfo(123);
    this.state = {
      id: initialInfo.id,
      producer: initialInfo.producer,
      farm: initialInfo.farm,
      elevation: initialInfo.elevation,
      variety: initialInfo.variety,
      process: initialInfo.process,
      quantity: initialInfo.quantity,
      qc: initialInfo.qc,
      tastingNotes: initialInfo.tastingNotes,
      status: initialInfo.status
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCoffeeInfo = this.getCoffeeInfo.bind(this);
  }

  //connect to backend
  getCoffeeInfo(guid) {
    const info = {
      guid: 123,
      id: "id",
      producer: "prod",
      farm: "farm",
      elevation: "elev",
      variety: "vart",
      process: "proc",
      quantity: "qnt",
      qc: "qc",
      tastingNotes: "tn",
      status: "placed",
      lastChangedAt: "12:00",
      lastChangedBy: "a@a.com"
    };
    return info;
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    //TO-DO submit data to the backend
    console.log("form submitted");
  }

  render() {
    return (
      <div>
        <p className="mainContentTitle" />
        <h3 className="mainContentTitle"> Update Coffee</h3>
        <form className="mainContentForm" onSubmit={this.handleSubmit}>
          <p />
          <label>
            <input
              type="text"
              value={this.state.id}
              name="id"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Id
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.producer}
              name="producer"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Producer
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.farm}
              name="farm"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Farm
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.elevation}
              name="elevation"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Elevation
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.variety}
              name="variety"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Variety
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.process}
              name="process"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Process
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.quantity}
              name="quantity"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Quantity
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.qc}
              name="qc"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            QC
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.tastingNotes}
              name="tastingNotes"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Tasting Notes
          </label>
          <p style={{ fontSize: 2 }} />
          <label>
            <input
              type="text"
              value={this.state.status}
              name="status"
              onChange={this.handleChange}
              style={{ color: "#616768" }}
            />{" "}
            Status
          </label>
          <p style={{ fontSize: 20 }} />
          <input type="submit" value="Update" style={{ color: "#616768" }} />
          <p />
          <p />
        </form>
      </div>
    );
  }
}

export default UpdateCoffeeForm;
