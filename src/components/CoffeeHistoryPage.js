import React from "react";

class CoffeeHistoryPage extends React.Component {
  // myMethod() {

  // }

  render() {
    return (
      <div>
        <div className="mainContentList">
          <table>
            <tr> Id: {this.props.id} </tr>
            <tr> Producer: {this.props.producer} </tr>
            <tr> Farm: {this.props.farm} </tr>
            <tr> Elevation: {this.props.elevation} </tr>
            <tr> Variety: {this.props.variety} </tr>
            <tr> Process: {this.props.process} </tr>
            <tr> Quantity: {this.props.quantity} </tr>
            <tr> QC: {this.props.qc} </tr>
            <tr> Tasting Notes: {this.props.tastingNotes} </tr>
            <tr> Status: {this.props.status} </tr>
            <tr> Last changed at: {this.props.lastChangedAt} </tr>
            <tr> Last changed by: {this.props.lastChangedBy} </tr>
            <tr>
              <hr />
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default CoffeeHistoryPage;
