import toast from 'react-hot-toast';
import { call, delay, takeLatest, put, select } from 'redux-saga/effects';
import RepositoryFactory from '../../../api/RepositoryFactory';
import { LOGIN, LOGOUT, REGISTER } from '../constants';
import { setUser, setAccessToken, setRefreshToken } from '../action';
import history from '../../../utils/history';
import { useSelector } from 'react-redux';

const AuthRepository = RepositoryFactory.get('auth');

function* signUp(payload) {
  console.log(payload.payload);
  try {
    const {name,email,password} = payload.payload;
    yield delay(200);
    yield call(AuthRepository.register, {
      name,
      email,
      password,
    });
  } catch(error) {
    toast.success('Email is already in use or is duplicated !');
  }
}

function* signIn(payload) {
  try {
    const { email, password } = payload.payload;
    yield delay(200);
    const response = yield call(AuthRepository.login, {
      email,
      password,
    });
    yield put(setUser(response?.user));
    yield put(setAccessToken(response?.tokens?.access));
    yield put(setRefreshToken(response?.tokens?.refresh));
    toast.success('Login is Success !');
    history.push('/')

  } catch (error) {
    toast.error('Wrong Email or Password !');

  }
}

function* signOut(refresh) {
  
  try {
    // const refreshToken = yield select(useSelector((state) => state.accessToken))

    const { refreshToken } = refresh.refreshToken;

    yield delay(200);
    yield call(AuthRepository.logout, {
      refreshToken,
    });
    
    yield put(setUser({}));
    yield put(setAccessToken({token:{}}));
    yield put(setRefreshToken({token:{}}));
  } catch (error) {
    console.log('fail');
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN, signIn);
  yield takeLatest(LOGOUT, signOut);
  yield takeLatest(REGISTER,signUp);
}
