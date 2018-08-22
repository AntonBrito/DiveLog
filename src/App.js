import React, { Component } from "react";
import "./App.css";
import Dives from "./components/Dives";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="DiveLog" />
        <div className="container">
          <Dives />
        </div>
      </div>
    );
  }
}

export default App;
