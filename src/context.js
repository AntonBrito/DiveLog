import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_DIVE":
      return {
        ...state,
        dives: state.dives.filter(dive => dive.id !== action.payload)
      };
    case "ADD_DIVE":
      return {
        ...state,
        dives: [action.payload, ...state.dives]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
