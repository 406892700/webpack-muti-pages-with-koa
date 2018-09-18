import indexState from './index/index';
import listState from './list';
import userInfo from './userInfo';
import likePlayer from './likePlayer';

import { combineReducers } from '../../redux';

const reducers = combineReducers({
  index: indexState,
  list: listState,
  userInfo,
  likePlayer,
});

export default reducers;
