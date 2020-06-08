import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      activeLink: null
    };
  }

  toggleCollapse = () => {
    this.setState({ expand: !this.state.expand });
  };

  toggleActive = (label) => {
    this.setState({ activeLink: label });
  }

  handleClick = (label) => {
    this.props.changeBreadcrumb(label);
    this.toggleActive(label);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <div className="link" onClick={this.toggleCollapse}>
              <span>⭐️ Favorites</span>
              <img className="chevron-down" src="/chevron-down.png" />
            </div>
            <ul className={this.state.expand ? "expand" : "hide"}>
              <Link
                onClick={() => this.handleClick("peopleandculture")}
                className="link"
                to="/peopleandculture">
                <li className={this.state.activeLink === "peopleandculture" ? "active-link" : ""} id="favorite-link">🏅 People & culture</li>
              </Link>
            </ul>
          </li>
          <Link
            onClick={() => this.handleClick("policies")}
            className="link"
            to="/policies">
            <li className={this.state.activeLink === "policies" ? "active-link" : ""}>📚 Policies</li>
          </Link>
          <Link
            onClick={() => this.handleClick("managementResources")}
            className="link"
            to="/management/resources">
            <li className={this.state.activeLink === "managementResources" ? "active-link" : ""}>📖 Management resources</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
