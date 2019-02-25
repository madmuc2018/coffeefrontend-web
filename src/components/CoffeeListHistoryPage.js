import React from "react";
import "../style.css";
import CoffeeHistoryPage from "./CoffeeHistoryPage";
import coffeeData from "../coffeeData";

class CoffeeListHistoryPage extends React.Component {
  render() {
    //TO-DO get coffeeData from backend
    const coffeeHistoryComponents = coffeeData.map(coffeeObj => {
      return (
        <div>
          <CoffeeHistoryPage
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
            lastChangedAt={coffeeObj.lastChangedAt}
            lastChangedBy={coffeeObj.lastChangedBy}
          />
        </div>
      );
    });

    return (
      <div>
        <p className="mainContentTitle" />
        <h1 className="mainContentTitle">History Page</h1>
        <h4 className="mainContentSubtitle">
          Coffee ID: {coffeeHistoryComponents[0].props.id}
        </h4>
        <p className="mainContentTitle" style={{ fontSize: 40 }} />
        {coffeeHistoryComponents}
        <p className="mainContentTitle" />
      </div>
    );
  }
}

export default CoffeeListHistoryPage;
