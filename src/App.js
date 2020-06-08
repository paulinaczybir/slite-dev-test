import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './components/Nav';
import PeopleAndCulture from './components/PeopleAndCulture';
import ManagementResources from './components/ManagementResources';
import Favorites from './components/Favorites';
import Policies from './components/Policies';
import Breadcrumbs from './components/Breadcrumbs';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breadcrumbDisplay: "peopleandculture"
    }
  }

  changeBreadcrumb = (newBreadcrumb) => {
    this.setState({
      breadcrumbDisplay: newBreadcrumb
    })
  }

  render() {
    return (
      <Router>
        <div className="logo">
          <img className="greyscale" src="/greyscale/Slite.png"/>
          <img className="greyscale" src="/logo/logo--color.png" />
        </div>
        <div className="main-container">
          <Breadcrumbs breadcrumbDisplay={this.state.breadcrumbDisplay}/>
          <Nav changeBreadcrumb={this.changeBreadcrumb} />
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
            <Route path="/management/resources">
              <ManagementResources />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
