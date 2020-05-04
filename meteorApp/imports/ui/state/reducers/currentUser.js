import { USER_LOGIN, USER_LOGOUT } from "/imports/constants/ActionTypes.js";

export const currentUser = (state = null, action) => {
  if (action.type === USER_LOGIN) {
    return action.user;
  }
  if (action.type === USER_LOGOUT) {
    return null;
  }
  return state;
};
