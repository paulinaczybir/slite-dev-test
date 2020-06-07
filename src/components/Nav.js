import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <Link to="/favorites">
          <li><img src="/star-plain/Star/plain.png" />Favorites</li>
          </Link>
          <Link to="/peopleandculture">
          <li>People & culture</li>
          </Link>
          <Link to="/policies">
          <li>Policies</li>
          </Link>
          <Link to="/managment/resources">
          <li>Management resources</li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;