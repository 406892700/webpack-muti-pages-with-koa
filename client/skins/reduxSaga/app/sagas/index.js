import indexWatcher from './index/index';
import userInfoWatcher from './userInfo';
import { fork } from 'redux-saga/effects';

export default function* () {
  yield fork(indexWatcher);
  yield fork(userInfoWatcher);
}
