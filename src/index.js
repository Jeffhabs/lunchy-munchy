import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink, browserHistory } from 'react-router';
import { RegisterPage } from './components/RegisterPage';
import ReduxPromise from 'redux-promise';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { firebase } from './firebase/firebase';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('logged in');
  } else {
    console.log('logged out');
  }

});