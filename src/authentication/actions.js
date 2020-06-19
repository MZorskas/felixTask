import * as types from './types';

export const loginUser = (token) => {
  return { type: types.USER_LOGIN, token };
};

export const logoutUser = () => {
  return { type: types.USER_LOGOUT };
};
