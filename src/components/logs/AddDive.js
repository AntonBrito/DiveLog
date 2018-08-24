import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddDive extends Component {
  state = {
    name: "",
    location: "",
    date: "",
    divebuddy: "",
    notes: ""
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, location, date, divebuddy, notes } = this.state;

    // uuid it allow us to generate an fake id
    const newDive = {
      id: uuid(),
      name,
      location,
      date,
      divebuddy,
      notes
    };

    dispatch({ type: "ADD_DIVE", payload: newDive });

    // Clear state
    this.setState({
      name: "",
      location: "",
      date: "",
      divebuddy: "",
      notes: ""
    });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, location, date, divebuddy, notes } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Log your Dive</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Location"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="When?"
                    value={date}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Dive Buddy"
                    name="name"
                    placeholder="Add Dive Buddy"
                    value={name}
                    onChange={this.onChange}
                  />
                  <TextInputGroup
                    label="Notes"
                    name="notes"
                    placeholder="Add notes"
                    value={notes}
                    onChange={this.onChange}
                  />
                  <input
                    type="submit"
                    value="Add DIVE"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddDive;
