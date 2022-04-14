import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import mySaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;
