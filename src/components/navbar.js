import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Running Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collpase navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link nav-item">
                Running
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link nav-item">
                Create Running Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link nav-item">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
