import React, { Component } from "react";

class AddDive extends Component {
  state = {
    name: "",
    location: "",
    date: "",
    divebuddy: "",
    notes: ""
  };

  render() {
    const { name, location, date, divebuddy, notes } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Log your Dive</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Diver's Name..."
                value={name}
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">DiveBuddy</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Add Buddy..."
                value={divebuddy}
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
              />
            </div>
            <input
              type="submit"
              value="Add Log"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddDive;
