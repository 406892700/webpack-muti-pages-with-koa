import { createAction, handleActions } from 'redux-actions';

const SET_VALUE = 'SET_VALUE';
const CHANGE = 'CHANGE';
const GET_DATA = 'GET_DATA';
const PENDING = 'PENGDING';
const FULFILED = 'FULFILED';

export const setValue = createAction(SET_VALUE);
export const change = createAction(CHANGE);
export const pending = createAction(PENDING);
export const fulfiled = createAction(FULFILED);
export const getData = createAction(GET_DATA, (name, age) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.2 ? reject(Error('network exception!')) : resolve('from remote');
        }, 2000);
    }).then((data) => {
        return `${data}: ${name} ${age}`;
    }, (error) => {
        console.log(error.stack);
        return error.toString();
    });
});

export default handleActions({
    [SET_VALUE]: (state, action) => ({ ...state, indexState: action.payload }),
    [CHANGE]: state => ({ ...state, indexState: 12345 }),
    [`${GET_DATA}_PENDING`]: (state) => { 
        return {
            ...state, remoteData: '...',
        };
    },
    [`${GET_DATA}_FULFILLED`]: (state, action) => ({ ...state, remoteData: action.payload }),
    [`${GET_DATA}_REJECTED`]: (state, action) => ({ ...state, remoteData: action.payload }),
}, {
    indexState: 'index data',
    remoteData: '1234',
});
