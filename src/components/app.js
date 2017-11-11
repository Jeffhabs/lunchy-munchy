import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RegisterPage from '../components/RegisterPage';
import LandingPage from '../components/LandingPage';
import LoginPage from '../components/LoginPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/" component={ LandingPage }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

