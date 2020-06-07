import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
  render() {
    return (
        <ul className="breadcrumbs">
          <Link className="link float-left">
            <li>⭐️Favorites</li>
          </Link>
            <li className="float-left">
              <img className="icon-chevron" src="/i-chevron.png" />
            </li>
          <Link className="link float-left" to="/peopleandculture">
            <li>🏅People & culture</li>
          </Link>
        </ul>
    );
  }
}

export default Breadcrumbs;
