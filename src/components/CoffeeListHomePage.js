import React from "react";
import "../style.css";
import CoffeeHomePage from "./CoffeeHomePage";
import coffeeData from "../coffeeData";
import { Redirect } from "react-router-dom";

class CoffeeListHomePage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const coffeeComponents = coffeeData.map(coffeeObj => {
      return (
        <div className="mainContentList">
          <CoffeeHomePage
            key={coffeeObj.guid}
            id={coffeeObj.id}
            producer={coffeeObj.producer}
            farm={coffeeObj.farm}
            elevation={coffeeObj.elevation}
            variety={coffeeObj.farm}
            process={coffeeObj.process}
            quantity={coffeeObj.quantity}
            qc={coffeeObj.qc}
            tastingNotes={coffeeObj.tastingNotes}
            status={coffeeObj.status}
          />
        </div>
      );
    });

    return (
      <div>
        <p className="mainContentTitle" />
        <h1 className="mainContentTitle">Inventory</h1>
        <p className="mainContentTitle" style={{ fontSize: 40 }} />
        <p className="mainContentList" />
        {coffeeComponents}
        <p className="mainContentTitle" />
      </div>
    );
  }
}

export default CoffeeListHomePage;
