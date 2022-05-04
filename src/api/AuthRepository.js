/* eslint-disable import/no-anonymous-default-export */
import AxiosClient from './AxiosClient';

const resource = '/auth';

export default {
  login: ({ email, password }) =>
    AxiosClient.post(`${resource}/login`, {
      email,
      password,
    }),
  register: ({ name, email, password }) =>
    AxiosClient.post(`${resource}/register`, {
      name,
      email,
      password,
    }),
  logout: ({ refreshToken }) =>
    AxiosClient.post(`${resource}/logout`, {
      refreshToken,
    }),
  products: ({ query }) =>
    AxiosClient.get(`/studio-product`, {
      query,
    }),
};
