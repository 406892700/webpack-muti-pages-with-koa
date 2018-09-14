import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import Index from './pages/index/Index';
import List from './pages/list/List';
import Login from './pages/login/Login';
import store from './store';

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Route path="/" exact component={Index}/>
            <Route path="/list" component={List}/>
            <Route path="/login" component={Login}/>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
