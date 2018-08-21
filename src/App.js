import React, { Component } from "react";
import "./App.css";
import Dive from "./components/Dive";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="DiveLog" />
        <div className="container">
          <Dive
            name="Anton Brito"
            divenumber="021345"
            location="Jamestown"
            date="jun-22-2018"
            divebuddy="RIley"
            notes="We saw a shark and allot of start fish"
          />
          <Dive
            name="Riley Brito"
            divenumber="021345"
            location="Jamestown"
            date="jun-22-2018"
            divebuddy="RIley"
            notes="We saw a shark and allot of start fish"
          />
        </div>
      </div>
    );
  }
}

export default App;
