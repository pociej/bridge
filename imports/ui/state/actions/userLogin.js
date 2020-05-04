import { USER_LOGIN, USER_LOGOUT } from "/imports/constants/ActionTypes.js";

export const userLogin = (user) => ({
  type: USER_LOGIN,
  user: user,
});

export const userLogout = {
  type: USER_LOGOUT,
};
