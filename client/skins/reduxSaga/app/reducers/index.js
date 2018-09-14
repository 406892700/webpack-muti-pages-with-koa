import indexState from './index/index';
import listState from './list';
import userInfo from './userInfo';
import rootInfo from './rootAction';

import { combineReducers } from '../../redux';

const reducers = combineReducers({
  index: indexState,
  list: listState,
  userInfo,
  rootInfo,
});
// console.log(reducers.toString())
export default reducers;
