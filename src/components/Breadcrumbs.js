import React, { Component } from "react";
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {

  breadcrumbStyling = (path, text) => {
    return [
      <li className="float-left">
        <img className="icon-chevron" src="/i-chevron.png" />
      </li>,
      <Link className="link float-left" to={path}>
        <li>{text}</li>
      </Link>
    ];
  };

  toggleBreadcrumbsView = () => {
    if (this.props.breadcrumbDisplay === "peopleandculture") {
      return ([
          <Link className="link float-left">
            <li>⭐️Favorites</li>
          </Link>,
          this.breadcrumbStyling("/peopleandculture", "🏅People & culture")
      ]);
    } else if (this.props.breadcrumbDisplay === "policies") {
      return this.breadcrumbStyling("/policies", "📚 Policies");
    } else if (this.props.breadcrumbDisplay === "managementResources") {
      return this.breadcrumbStyling("/management/resources", "📖 Management resources");
    }
  };

  render() {
    return (
      <ul className="breadcrumbs">
        {this.toggleBreadcrumbsView()}
        <img className="favorite-icon" src="/plain-star.png"/>
      </ul>
    )
  }
}

export default Breadcrumbs;

