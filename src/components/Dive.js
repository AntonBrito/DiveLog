import React, { Component } from "react";
import PropTypes from "prop-types";

class Dive extends Component {
  state = {
    showDiveInfo: false
  };

  render() {
    const { name, location, date, divebuddy, notes } = this.props.dive;
    const { showDiveInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showDiveInfo: !this.state.showDiveInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>

        {showDiveInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Location: {location}</li>
            <li className="list-group-item">Date: {date}</li>
            <li className="list-group-item">Divebuddy: {divebuddy}</li>
            <li className="list-group-item">Notes: {notes}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Dive.propTypes = {
  dive: PropTypes.object.isRequired
};

export default Dive;
