import { LOGIN_SUCCEEDED, REGISTER } from '../../container/Login/constants';

export const register = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const loginSucceeded = (data) => {
  console.log(data);
  return {
    type: LOGIN_SUCCEEDED,
    payload: data,
  };
};
