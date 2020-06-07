import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }

  toggleCollapse = () => {
    this.setState({ expand: !this.state.expand });
  };

  render() {
    return (
      <nav>
        <ul>
            <li>
              <div className="link" onClick={this.toggleCollapse}>
                ⭐️Favorites
                <img src="/chevron-down.png" />
              </div>
              <ul className={this.state.expand ? "expand" : "hide"}>
                <Link className="link" to="/peopleandculture">
                  <li id="favorite-link">
                    🏅People & culture
                  </li>
                </Link>
              </ul>
            </li>
          <Link className="link" to="/policies">
            <li>📚Policies</li>
          </Link>
          <Link className="link" to="/managment/resources">
            <li>📖Management resources</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
