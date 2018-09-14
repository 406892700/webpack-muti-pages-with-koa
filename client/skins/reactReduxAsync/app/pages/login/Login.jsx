import React, { Component } from 'react';
import { connect } from 'react-redux';
import doLogin from '../../reducers/userInfo/async';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: 'simple',
      password: 'xhy15057142408',
    };
  }
  handleSubmitClick = () => {
    this.props.actions.doLogin({
      ...this.state,
    }, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const {
      username,
      password,
    } = this.state;
    const {
      pending,
      msg,
    } = this.props;
    return (
      <div>
        <h1>redux with thunk</h1>
        <form action="" >
          <div className="form-item">
            <label htmlFor="">用户名</label>
            <div>
              <input 
                type="text" 
                value={username}
                onChange={(e) => {
                  this.setState({
                    username: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="">密码</label>
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <p>{msg}</p>
          <button onClick={this.handleSubmitClick}>{pending ? '登录中...' : '登录'}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect((state) => {
  const { userInfo } = state;
  return {
    pending: userInfo.pending,
    msg: userInfo.msg,
    loginUser: userInfo.loginUser,
  };
}, (dispatch) => {
  return {
    actions: {
      doLogin: (params, callback) => dispatch(doLogin(params, callback)),
    },
  };
})(Login));
