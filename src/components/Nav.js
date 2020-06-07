import React, { Component } from 'react'
import { Link } from 'react-router-dom';

 class Nav extends Component {

  render() {
    return (
      <nav>
        <ul>
          <Link className="link" to="/favorites">
          <li><img src="/favorites.png"/></li>
          </Link>
          <Link className="link" to="/peopleandculture">
          <li><img src="/peopleCulture.png"/></li>
          </Link>
          <Link className="link" to="/policies">
          <li><img src="/policies.png"/></li>
          </Link>
          <Link className="link" to="/managment/resources">
          <li><img src="/management-resources.png"/></li>
          </Link>
        </ul>
      </nav>
    )
  }
}

export default Nav;