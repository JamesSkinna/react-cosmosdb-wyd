import React, { Component } from "react";
import "./App.css";

import DealLocations from "./components/DealLocations";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Deal Locations</h1>
        <div className="header-bar" />
        <DealLocations />
      </div>
    );
  }
}

export default App;