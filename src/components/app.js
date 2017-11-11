import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import RegisterPage from '../components/RegisterPage';
import LandingPage from '../components/LandingPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/landing" component={ LandingPage }/>
          <Route path="/register" component={RegisterPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

