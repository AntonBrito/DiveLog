import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dives from "./components/logs/Dives";
import AddDive from "./components/logs/AddDive";
import EditDive from "./components/logs/EditDive";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Test from "./components/test/Test";

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
                <Route exact path="/dive/edit:id" component={EditDive} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
