import indexState from './index/index';
import listState from './list';
import { combineReducers } from 'redux';

// console.log(indexState, listState);

export default combineReducers({
    indexState,
    listState,
});
