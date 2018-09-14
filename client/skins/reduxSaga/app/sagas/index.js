import indexWatcher from './index/index';
import userInfoWatcher from './userInfo';
import likePlayerWatcher from './likePlayer';
import { fork } from 'redux-saga/effects';

export default function* () {
  yield fork(indexWatcher);
  yield fork(userInfoWatcher);
  yield fork(likePlayerWatcher);
}
