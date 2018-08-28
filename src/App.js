import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dives from "./components/logs/Dives";
import AddDive from "./components/logs/AddDive";
import Header from "./components/layout/Header";
import About from "./components/pages/About";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="DiveLog" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dives} />
                <Route exact path="/dive/add" component={AddDive} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
