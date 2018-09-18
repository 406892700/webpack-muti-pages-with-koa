import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

import Index from './pages/index/Index';
import LikePlayer from './pages/likePlayer/LikePlayer';
import Login from './pages/login/Login';
import store from './store';
import Nav from './components/Nav/Nav';

class AuthRouteCmp extends Component {
  render() {
    const { login, component } = this.props;
    const RouteCmpt = component;
    return (
      <React.Fragment>
        {
          login ? <RouteCmpt {...this.props}/> : <Redirect to="/login"/>
        }
      </React.Fragment>
    );
  }
}

const AuthRoute = connect((state) => {
  return {
    login: state.userInfo.loginUser,
  };
})(AuthRouteCmp);

const createRouteComponent = (Compt) => {
  const FakeCompt = (props) => {
    return (
      <div>
        <AuthRoute {...props} component={Compt}/>
      </div>
    );
  };

  return FakeCompt;
};

export default class Routers extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Nav/>
            <Route path="/" exact component={createRouteComponent(Index)}/>
            <Route path="/userinfo/:id" exact component={createRouteComponent(LikePlayer)}/>
            <Route path="/login" exact component={Login}/>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}
