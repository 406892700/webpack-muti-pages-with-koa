import indexWatcher from './index/index';
import { fork } from 'redux-saga/effects';

export default function* () {
  yield fork(indexWatcher);
}
