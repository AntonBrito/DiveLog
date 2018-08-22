import React, { Component } from "react";
import Dive from "./Dive";
import { Consumer } from "../context";

class Dives extends Component {
  deleteDive = id => {
    const { dives } = this.state;

    const newDives = dives.filter(dive => dive.id !== id);

    this.setState({
      dives: newDives
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dives } = value;
          return (
            <React.Fragment>
              {value.dives.map(dive => (
                <Dive
                  key={dive.id}
                  dive={dive}
                  deleteClickHandler={this.deleteDive.bind(this, dive.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Dives;
