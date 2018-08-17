import './index.scss';

import { createStore, combineReducers, applyMiddleware, compose } from './redux';
import thunk from './redux-thunk';

const $btn = $('#button');

// actions
const getDataAction = {
    type: 'GET_DATA',
    url: 'http://www.x2hy.com',
};

const middleware = () => {
    return (next) => {
        return (action) => {
            // console.log(getState());
            console.log('data has just changed~');
            next(action);
        };
    };
};


// state
const myState = {
    data: null,
};

// reducers
const mydata = (state = myState, action) => {
    if (action.type === 'GET_DATA') {
        return Object.assign({}, state, {
            data: action.data,
        });
    }

    return state;
};

// state 
const indexState = {
    pageName: 'index',
};

const indexData = (state = indexState) => {
    return state;
};


const reducer = combineReducers({ mydata, indexData });
const middlewares = compose(applyMiddleware(thunk), applyMiddleware(middleware));
const store = createStore(reducer, { mydata: 134 }, middlewares);
// console.log(store.getState());

// 副作用函数
const sendInfo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: 'i’m the data from server~',
            });
        }, 2000);
    });   
};

// 使用thunk中间件的dispatch方式
store.dispatch((dispatch) => {
    sendInfo().then((data) => {
        dispatch({
            type: 'GET_DATA',
            data,
        });
    });
});


store.subscribe(() => {
    console.log(store.getState());
});

$btn.bind('click', () => {
    store.dispatch(getDataAction);
    // unsubscribe();
});
// your code here...

if (module.hot) {
    module.hot.accept();
}
