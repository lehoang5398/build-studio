import { REGISTER, LOGIN, SET_USER, LOGOUT , SET_ACCESS_TOKEN, SET_REFRESH_TOKEN } from './constants';

export const signUp = (data) => {
  console.log(data);
  return {
    type: REGISTER,
    payload: data,
  };
};

export const signIn = (payload, ) => {
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

export const setAccessToken = (access) => {
  return {
    type: SET_ACCESS_TOKEN,
    access,
  }
}

export const setRefreshToken = (refresh) => {
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


