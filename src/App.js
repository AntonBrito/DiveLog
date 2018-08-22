import React, { Component } from "react";
import "./App.css";
import Dives from "./components/Dives";
import Header from "./components/Header";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="DiveLog" />
          <div className="container">
            <Dives />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
