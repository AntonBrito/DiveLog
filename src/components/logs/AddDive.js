import React, { Component } from "react";
import { Consumer } from "../../context";
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
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Diver's Name..."
                      value={name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control form-control-lg"
                      placeholder="Beach name..."
                      value={location}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                      type="text"
                      name="date"
                      className="form-control form-control-lg"
                      placeholder="When?..."
                      value={date}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">DiveBuddy</label>
                    <input
                      type="text"
                      name="divebuddy"
                      className="form-control form-control-lg"
                      placeholder="Add Buddy..."
                      value={divebuddy}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <input
                      type="text"
                      name="notes"
                      className="form-control form-control-lg"
                      placeholder="Add notes..."
                      value={notes}
                      onChange={this.onChange}
                    />
                  </div>
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
