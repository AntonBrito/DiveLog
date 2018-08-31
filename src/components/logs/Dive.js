import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

class Dive extends Component {
  state = {
    showDiveInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_DIVE", payload: id });
  };

  render() {
    const { id, name, location, date, divebuddy, notes } = this.props.dive;
    const { showDiveInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to={`dive/edit${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
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
        }}
      </Consumer>
    );
  }
}

Dive.propTypes = {
  dive: PropTypes.object.isRequired
};

export default Dive;
