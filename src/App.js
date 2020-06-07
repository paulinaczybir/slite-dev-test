import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/Nav';
import PeopleAndCulture from './components/PeopleAndCulture';
import ManagementResources from './components/ManagementResources';
import Favorites from './components/Favorites';
import Policies from './components/Policies';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div>
          <div className="logo">
            <img className="greyscale" src="/greyscale/Slite.png"/>
            <img className="greyscale" src="/logo/logo--color.png" />
          </div>
          <div className="main-container">
            <div className="breadcrumbs">⭐️Favorites<img src="/favorites.png"/><img className="icon-chevron" src="/i-chevron.png"/>🏅People & culture <img src="/peopleCultureBlack.png"/></div>
            <Nav />
            <Switch>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/peopleandculture">
                <PeopleAndCulture />
              </Route>
              <Route path="/policies">
                <Policies />
              </Route>
              <Route path="/managment/resources">
                <ManagementResources />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
