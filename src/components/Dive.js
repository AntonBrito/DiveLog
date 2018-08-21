import React, { Component } from "react";
import PropTypes from "prop-types";

class Dive extends Component {
  state = {
    showLogInfo: false
  };
  render() {
    const { name, divenumber, location, date, divebuddy, notes } = this.props;
    const { showLogInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showLogInfo: !this.state.showLogInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {showLogInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Divenumber: {divenumber}</li>
            <li className="list-group-item">Location: {location}</li>
            <li className="list-gorup-item">Date: {date}</li>
            <li className="list-gorup-item">Divebuddy: {divebuddy}</li>
            <li className="list-gorup-item">Notes: {notes}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Dive.propTypes = {
  name: PropTypes.string.isRequired,
  divenumber: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  divebuddy: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired
};

export default Dive;
