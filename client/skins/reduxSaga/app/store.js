import { createStore, applyMiddleware, compose } from '../redux';
import reducers from './reducers';
// import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers, 
  {},
  // composeEnhancers(applyMiddleware(thunk, promise()))
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
// console.log(store.getState());
sagaMiddleware.run(rootSaga);
export default store;
