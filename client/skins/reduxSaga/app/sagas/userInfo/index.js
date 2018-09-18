import { put, call, take, fork, takeEvery } from 'redux-saga/effects';
import fetchApi from '../../libs/fetch';
import { doLoginSubmit, doLoginSuccess, DO_LOGIN, doLoginError } from '../../reducers/userInfo';

export function* login(action) {
  const {
    params: {
      name, password,
    },
  } = action.payload;
  yield put(doLoginSubmit());
  try {
    const data = yield call(fetchApi, {
      query: ` 
      query {
        login(name: "${name}", password: "${password}"){
          age
          id
          hobby
          name
        }
      }
    `,
    });
    if (data.login) {
      yield put(doLoginSuccess(data));
      action.payload.callback();
    } else {
      yield put(doLoginError('用户名或者密码错误'));
    }
  } catch (e) {
    yield put(doLoginError(e));
  }
}

export default function* () {
  yield takeEvery(DO_LOGIN, login);
}
