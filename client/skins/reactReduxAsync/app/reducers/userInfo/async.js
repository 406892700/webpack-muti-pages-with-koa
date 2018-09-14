import { loginActions } from './index';
import getApi from '../../libs/fetch';

// 登录接口
const doLogin = (params, callback) => {
  return async (dispatch) => {
    try {
      dispatch(loginActions.doLogining());
      const result = await getApi({
        url: '/api/login',
        type: 'post',
        data: {
          ...params,
        },
      });
      callback(result);
      dispatch(loginActions.doLoginSuccess(result));
    } catch (e) {
      dispatch(loginActions.doLoginFail(e));
    }
  };
};

export default doLogin;
