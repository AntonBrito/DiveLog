import React, { Component } from "react";
import Dive from "./Dive";

class Dives extends Component {
  state = {
    dives: [
      {
        id: 1,
        name: "Anton Brito",
        location: "Jamestown",
        date: "May-22-2018",
        divebuddy: "John",
        notes: "We saw a shark and allot of start fish"
      },
      {
        id: 2,
        name: "Riley Brito",
        location: "Bahamas",
        date: "feb-12-2018",
        divebuddy: "Jess",
        notes: "It was amazing"
      },
      {
        id: 3,
        name: "Anton Brito",
        location: "Bahamas",
        date: "feb-12-2018",
        divebuddy: "Riley",
        notes: "I cant wait to go back"
      }
    ]
  };

  render() {
    const { dives } = this.state;
    return (
      <React.Fragment>
        {dives.map(dive => (
          <Dive key={dive.id} dive={dive} />
        ))}
      </React.Fragment>
    );
  }
}

export default Dives;
