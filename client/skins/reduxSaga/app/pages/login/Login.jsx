import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin } from '../../reducers/userInfo';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    };
  }
  handleSubmitClick = () => {
    this.props.actions.doLogin({
      params: { ...this.state },
      callback: () => {
        this.props.history.push('/');
      },
    });
  }
  render() {
    const {
      name,
      password,
    } = this.state;
    const {
      pending,
      msg,
    } = this.props;
    return (
      <div>
        <h1>redux with saga</h1>
        <form action="" >
          <div className="form-item">
            <label htmlFor="">用户名</label>
            <div>
              <input 
                type="text" 
                value={name}
                onChange={(e) => {
                  this.setState({
                    name: e.target.value,
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
