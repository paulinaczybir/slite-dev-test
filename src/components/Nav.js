import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <Link className="link" to="/favorites">
          <li><img className="icon-small" src="/star-plain/Star/plain.png" />Favorites</li>
          </Link>
          <Link className="link" to="/peopleandculture">
          <li><img src="/peopleCulture.png"/></li>
          </Link>
          <Link className="link" to="/policies">
          <li>Policies</li>
          </Link>
          <Link className="link" to="/managment/resources">
          <li>Management resources</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;