/* eslint-disable require-yield */
import toast from 'react-hot-toast';
import { call, delay, takeLatest, put } from 'redux-saga/effects';
import RepositoryFactory from '../../../api/RepositoryFactory';
import { LOGIN } from '../constants';
import { setUser } from '../action';

const AuthRepository = RepositoryFactory.get('auth');

function* signIn(payload) {
  try {
    const { email, password } = payload.payload;
    yield delay(200);
    const response = yield call(AuthRepository.login, {
      email,
      password,
    });
    yield put(setUser(response));
    toast.success('Login is Success !');
  } catch (error) {
    console.log(error, 'bị chửi');
    toast.error('Wrong Email or Password !');
  }
}

export default function* buildStudioSaga() {
  yield takeLatest(LOGIN, signIn);
}