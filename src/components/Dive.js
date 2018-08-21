import React, { Component } from "react";
// import PropTypes from "prop-types";

class Dive extends Component {
  render() {
    // const { name, divenumber, location, date, divebuddy, notes}
    const { name } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                showContactInfo: !this.state.showContactInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h4>
        {/* {showLogInfo ?} (

        ) */}
      </div>
    );
  }
}

export default Dive;
