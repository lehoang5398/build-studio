import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';



function* mySaga() {
  yield takeLatest("LOGIN_SUCCEEDED");
}

export default mySaga;