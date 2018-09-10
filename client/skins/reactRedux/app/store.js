import { createStore, applyMiddleware, compose } from '../redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// const middlewares = compose(applyMiddleware(thunk), applyMiddleware(middleware));
// console.log(reducers);
const composeEnhancers = compose;
const store = createStore(
  reducers, 
  {},
  composeEnhancers(thunk, promise())
);
// console.log(store.getState());

export default store;
