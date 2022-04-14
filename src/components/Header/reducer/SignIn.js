/* eslint-disable no-fallthrough */
import { SET_USER } from '../constants';

const initialData = {
  accessToken: localStorage.getItem('ACCESS_TOKEN'),
  refreshToken: localStorage.getItem('REFRESH_TOKEN'),
  user: localStorage.getItem('USER'),
};

const initialState = {
  user: initialData.user ? JSON.parse(initialData.user) : { status: false },
  accessToken: initialData.accessToken
    ? JSON.parse(initialData.accessToken)
    : {},
  refreshToken: initialData.refreshToken
    ? JSON.parse(initialData.refreshToken)
    : {},
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      state.user = {
        ...action.user.user,
        status: true,
      };
      state.accessToken = action.user.tokens.access;
      state.refreshToken = action.user.tokens.refresh;
      localStorage.setItem('USER', JSON.stringify(state.user));
      localStorage.setItem(
        'ACCESS_TOKEN',
        JSON.stringify(state.accessToken),
      );
      localStorage.setItem(
        'REFRESH_TOKEN',
        JSON.stringify(state.refreshToken),
      );
      return state;
    default:
      return state;
  }
};
export default signIn;
