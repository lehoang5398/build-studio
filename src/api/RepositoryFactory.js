/* eslint-disable import/no-anonymous-default-export */
import AuthRepository from './AuthRepository';

const repositories = {
  auth: AuthRepository,
};

export default {
  get: (name) => repositories[name],
};

