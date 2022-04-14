import {
  REGISTER,
  LOGIN,
  SET_USER,
} from './constants';

export const register = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const login = (payload) => {
  return {
    type: LOGIN,
    payload,
  };
};

export const setUser = (user) => ({
  type: SET_USER,
  user,
});
