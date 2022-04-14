import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import mySaga from './rootSaga';

const composeEnhancer =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

export default store;
