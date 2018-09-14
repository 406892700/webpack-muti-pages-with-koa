import {
  createAction,
  handleActions,
} from 'redux-actions';

const initialState = {
  pending: false,
  msg: '',
  loginUser: {

  },
};

// 登录动作
export const DO_LOGIN = 'DO_LOGIN';
export const doLogin = createAction(DO_LOGIN);

// 发起登录
export const DO_LOGIN_SUBMIT = 'DO_LOGIN/SUBMIT';
export const doLoginSubmit = createAction(DO_LOGIN_SUBMIT);

// 登录成功
export const DO_LOGIN_SUCCESS = 'DO_LOGIN/SUCCESS';
export const doLoginSuccess = createAction(DO_LOGIN_SUCCESS);

// 登录失败
export const DO_LOGIN_ERROR = 'DO_LOGIN/ERROR';
export const doLoginError = createAction(DO_LOGIN_ERROR);

export default handleActions({
  [DO_LOGIN_SUBMIT]: (state) => {
    return {
      ...state,
      pending: true,
    };
  },
  [DO_LOGIN_SUCCESS]: (state, action) => {
    const newState = {
      ...state,
      msg: action.payload.msg,
      loginUser: action.payload.userinfo,
      pending: false,
    };

    localStorage.setItem('userInfo', JSON.stringify(newState));

    return newState;
  },
  [DO_LOGIN_ERROR]: (state, action) => {
    return {
      ...state,
      error: true,
      msg: action.payload,
      pending: false,
    };
  },
}, initialState);
