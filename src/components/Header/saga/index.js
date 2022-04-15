import toast from 'react-hot-toast';
import { call, delay, takeLatest, put } from 'redux-saga/effects';
import RepositoryFactory from '../../../api/RepositoryFactory';
import { LOGIN, LOGOUT } from '../constants';
import { setUser, setAccessToken, setRefreshToken } from '../action';

const AuthRepository = RepositoryFactory.get('auth');

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
  } catch (error) {
    console.log(error, 'bị chửi');
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
    // window.location.reload();
  } catch (error) {
    console.log('fail');
  }
}

export default function* userSaga() {
  yield takeLatest(LOGIN, signIn);
  yield takeLatest(LOGOUT, signOut);
}
