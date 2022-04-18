import { fork } from 'redux-saga/effects';
import userSaga from '../container/Login/saga';

export default function* rootSaga() {
  yield fork(userSaga);
}

