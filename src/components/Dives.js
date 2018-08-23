import React, { Component } from "react";
import Dive from "./Dive";
import { Consumer } from "../context";

class Dives extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dives } = value;
          return (
            <React.Fragment>
              {value.dives.map(dive => (
                <Dive key={dive.id} dive={dive} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Dives;
