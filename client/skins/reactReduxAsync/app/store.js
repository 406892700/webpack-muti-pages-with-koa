import { createStore, applyMiddleware, compose } from '../redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// const middlewares = compose(applyMiddleware(thunk), applyMiddleware(middleware));
// console.log(reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk, promise()))
);

export default store;
