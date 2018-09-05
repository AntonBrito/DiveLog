import React, { Component } from "react";
import axios from "axios";

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
    case "UPDATE_DIVE":
      return {
        ...state.dives.map(
          dive =>
            dive.id === action.payload.id ? (dive = action.payload) : dive
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    dives: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    this.setState({ dives: res.data });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
