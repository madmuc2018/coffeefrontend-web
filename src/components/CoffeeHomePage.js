import React from "react";
import { Redirect } from "react-router-dom";

class CoffeeHomePage extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     property: "value"
  //   };
  // }

  // myMethod() {
  //
  // }

  render() {
    return (
      <div>
        <div className="mainContentList">
          <table style={{ textAlign: "left", listStyle: "none" }}>
            <tr> Id: {this.props.id} </tr>
            <tr> Producer: {this.props.producer} </tr>
            <tr> Variety: {this.props.variety} </tr>
            <tr> Quantity: {this.props.quantity} </tr>
            <tr> Status: {this.props.status} </tr>
            <tr>
              <button style={{ color: "#616768" }}>Update</button>
              <text> </text>
              <button style={{ color: "#616768" }}>History</button>
              <text> </text>
              <button style={{ color: "#616768" }}>QR Code</button>
            </tr>
            <tr>
              <hr />
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default CoffeeHomePage;

// function Coffee(props) {
//   return (
//     <div>
//       <div className="mainContentList">
//         <p> Id: {props.id} </p>
//         <p> Producer: {props.producer} </p>
//         <p> Farm: {props.farm} </p>
//         <p> Elevation: {props.elevation} </p>
//         <p> Variety: {props.variety} </p>
//         <p> Process: {props.process} </p>
//         <p> Quantity: {props.quantity} </p>
//         <p> QC: {props.qc} </p>
//         <p> Tasting Notes: {props.tastingNotes} </p>
//         <p> Status: {props.status} </p>
//       </div>
//       <hr className="mainContentList" />
//     </div>
//   );
// }
