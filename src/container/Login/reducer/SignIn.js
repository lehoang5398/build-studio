
import { SET_REFRESH_TOKEN, SET_USER, SET_ACCESS_TOKEN } from '../constants';

const initialData = {
  accessToken: localStorage.getItem('ACCESS_TOKEN'),
  refreshToken: localStorage.getItem('REFRESH_TOKEN'),
  user: localStorage.getItem('USER'),
};

const initialState = {
  user: initialData.user ? JSON.parse(initialData.user) : {},
  accessToken: initialData.accessToken
    ? JSON.parse(initialData.accessToken)
    : {},
  refreshToken: initialData.refreshToken
    ? JSON.parse(initialData.refreshToken)
    : {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = action.user;
      localStorage.setItem('USER', JSON.stringify(state.user));
      return state;
    case SET_REFRESH_TOKEN:
      state.refreshToken = action.refresh.token;
      localStorage.setItem('REFRESH_TOKEN', JSON.stringify(state.refreshToken));
      return state;
    case SET_ACCESS_TOKEN:
      state.accessToken = action.access.token;
      localStorage.setItem('ACCESS_TOKEN', JSON.stringify(state.accessToken));
      return state;
    default:
      return state;
  }
};
export default loginReducer;
