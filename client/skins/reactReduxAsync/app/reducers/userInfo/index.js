import {
  handleActions,
  createActions,
} from 'redux-actions';

const initialState = {
  pending: false,
  msg: '',
  loginUser: {

  },
};

const noop = (x => x);

export const DO_LOGINING = 'DO_LOGINING';
export const DO_LOGIN_SUCCESS = 'DO_LOGIN_SUCCESS';
export const DO_LOGIN_FAIL = 'DO_LOGIN_FAIL';

export const loginActions = createActions({
  [DO_LOGINING]: noop,
  [DO_LOGIN_SUCCESS]: noop,
  [DO_LOGIN_FAIL]: noop,
});

export default handleActions({
  [DO_LOGINING]: (state) => {
    return {
      ...state,
      pending: true,
    };
  },
  [DO_LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      msg: action.payload.msg,
      loginUser: action.payload.userinfo,
      pending: false,
    };
  },
  [DO_LOGIN_FAIL]: (state, action) => {
    return {
      ...state,
      error: action.error,
      msg: action.payload,
      pending: false,
    };
  },
}, initialState);
