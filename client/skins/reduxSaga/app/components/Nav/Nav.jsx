import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLoginOut } from '../../reducers/userInfo/index';
import './nav.scss';

const noop = x => x;

class Nav extends Component {
  handleClick = () => {
    this.props.actions.loginOut();
  }
  render() {
    return (
      <div className="c-nav">
        <span onClick={this.handleClick}>登出</span>
      </div>
    );
  }
}

export default connect(noop, (dispatch) => {
  return {
    actions: {
      loginOut: () => dispatch(doLoginOut()),
    },
  };
})(Nav);
