import { REGISTER, LOGIN, SET_USER, LOGOUT, SET_LOGOUT } from './constants';

export const register = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const login = (payload) => {
  console.log(payload);
  return {
    type: LOGIN,
    payload,
  };
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const logout = (payload) => {
  return {
    type: LOGOUT,
    payload,
  };
};


