import { createStore } from '../redux';
import reducers from './reducers';
// const middlewares = compose(applyMiddleware(thunk), applyMiddleware(middleware));
// console.log(reducers);
const store = createStore(
    reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());

export default store;
