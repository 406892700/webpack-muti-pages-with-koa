import indexState from './index/index';
import listState from './list';

import { combineReducers } from '../../redux';

const reducers = combineReducers({
  index: indexState,
  list: listState,
});
// console.log(reducers.toString())
export default reducers;
