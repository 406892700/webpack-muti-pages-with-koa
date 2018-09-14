import { put, call, take, fork, takeEvery, all, takeLatest } from 'redux-saga/effects';
import fetchApi from '../../libs/fetch';
import * as likePlayerActions from '../../reducers/likePlayer';

// worker --------------------------------

// getUserList worker
export function* getUserList(action) {
  yield put(likePlayerActions.requestPlayerList());
  const { player } = yield call(fetchApi, {
    query: ` 
    { 
      player(u_id: ${action.payload.id}) {
        id
        name
        team
        draft
      }
    }
    `,
  });
  yield put(likePlayerActions.receivePlayerList(player));
}


// watcher
export default function* () {
  // while (true) {
  //   const { payload: { index } } = yield take(indexActions.GET_USER_LIST);
  //   yield call(getUserList, index);
  // }
  yield takeEvery(likePlayerActions.GET_PLAYER_LIST, getUserList);
}
