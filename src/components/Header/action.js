import { REGISTER, LOGIN, SET_USER, LOGOUT , SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from './constants';

export const register = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const login = (payload, setAccount) => {
  return {
    type: LOGIN,
    payload,
    setAccount,
  };
};

export const setUser = (user) => {
  console.log(user);
  return {
    type: SET_USER,
    user,
  };
};

export const setAccessToken = (access) => {
  console.log(access);

  return {
    type: SET_ACCESS_TOKEN,
    access,
  }
}

export const setRefreshToken = (refresh) => {
  console.log(refresh);

  return {
    type: SET_REFRESH_TOKEN,
    refresh,
  }
}

export const logout = (refreshToken) => {
  return {
    type: LOGOUT,
    refreshToken,
  };
};


