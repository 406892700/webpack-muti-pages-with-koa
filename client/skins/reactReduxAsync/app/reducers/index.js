import indexState from './index/index';
import listState from './list';
import userInfo from './userInfo';
import { combineReducers } from 'redux';

// console.log(indexState, listState);

export default combineReducers({
  indexState,
  listState,
  userInfo,
});
