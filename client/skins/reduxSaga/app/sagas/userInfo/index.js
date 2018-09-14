import { put, call, take, fork, takeEvery } from 'redux-saga/effects';
import fetchApi from '../../libs/fetch';
import { doLoginSubmit, doLoginSuccess, DO_LOGIN, doLoginError } from '../../reducers/userInfo';

export function* login(action) {
  yield put(doLoginSubmit());
  try {
    const data = yield call(fetchApi, {
      url: '/api/login',
      type: 'post',
      data: {
        ...action.payload.params,
      },
    });
    yield put(doLoginSuccess(data));
    action.payload.callback();
  } catch (e) {
    yield put(doLoginError(e));
  }
}

export default function* () {
  yield takeEvery(DO_LOGIN, login);
}
