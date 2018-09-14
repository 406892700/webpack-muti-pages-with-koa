import {
  createAction,
  handleActions,
} from 'redux-actions';
import getApi from '../../libs/fetch';

const initialState = {
  pending: false,
  msg: '',
  loginUser: {

  },
};

export const DO_LOGIN = 'DO_LOGIN';
export const doLogin = createAction(DO_LOGIN, (params, callback) => {
  return getApi({
    url: '/api/login',
    type: 'post',
    data: {
      ...params,
    },
  }).then((result) => {
    callback && callback();
    return result;
  });
});

export default handleActions({
  [`${DO_LOGIN}_PENDING`]: (state) => {
    return {
      ...state,
      pending: true,
    };
  },
  [`${DO_LOGIN}_FULFILLED`]: (state, action) => {
    return {
      ...state,
      msg: action.payload.msg,
      loginUser: action.payload.userinfo,
      pending: false,
    };
  },
  [`${DO_LOGIN}_REJECTED`]: (state, action) => {
    return {
      ...state,
      error: action.error,
      msg: action.payload,
      pending: false,
    };
  },
}, initialState);
