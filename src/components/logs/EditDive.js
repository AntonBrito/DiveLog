import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditDive extends Component {
  state = {
    name: "",
    location: "",
    date: "",
    divebuddy: "",
    notes: "",
    errors: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const dive = res.data;

    this.setState({
      name: dive.name,
      location: dive.location,
      date: dive.date,
      divebuddy: dive.divebuddy,
      notes: dive.notes
    });
  }

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, location, date, divebuddy, notes } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ erros: { name: "Email is required" } });
      return;
    }

    if (location === "") {
      this.setState({ erros: { location: "location is required" } });
      return;
    }

    if (date === "") {
      this.setState({ erros: { date: "date is required" } });
      return;
    }

    if (divebuddy === "") {
      this.setState({ erros: { divebuddy: "Email is required" } });
      return;
    }

    if (notes === "") {
      this.setState({ erros: { notes: "notes is required" } });
      return;
    }

    const updDive = {
      name,
      location,
      date,
      divebuddy,
      notes
    };

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updDive
    );

    dispatch({ type: "UPDATE_DIVE", payload: res.data });

    // Clear state
    this.setState({
      name: "",
      location: "",
      date: "",
      divebuddy: "",
      notes: "",
      erros: {}
    });

    this.props.history.push("/");
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, location, date, divebuddy, errors, notes } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Log</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Location"
                    name="location"
                    placeholder="Enter Name"
                    value={location}
                    onChange={this.onChange}
                    error={errors.location}
                  />
                  <TextInputGroup
                    label="Date"
                    name="date"
                    placeholder="When?"
                    value={date}
                    onChange={this.onChange}
                    error={errors.date}
                  />
                  <TextInputGroup
                    label="Dive Buddy"
                    name="divebuddy"
                    placeholder="Add Dive Buddy"
                    value={divebuddy}
                    onChange={this.onChange}
                    error={errors.divebuddy}
                  />
                  <TextInputGroup
                    label="Notes"
                    name="notes"
                    placeholder="Add notes"
                    value={notes}
                    onChange={this.onChange}
                    error={errors.notes}
                  />
                  <input
                    type="submit"
                    value="Update DIVE"
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

export default EditDive;
