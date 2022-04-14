import { fork } from 'redux-saga/effects';
import userSaga from '../components/Header/saga';

export default function* rootSaga() {
  yield fork(userSaga);
}
